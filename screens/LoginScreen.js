import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";
import { ApiFetcher } from "./api/ApiFetcher";
import Loader from "./Loader";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const postData = async () => {
    try {
      const data = await ApiFetcher({
        method: "POST",
        url: "https://reqres.in/api/login",
        body: {
          email: email,
          password: password,
        },
      });
      return data;
    } catch (error) {
      console.log("POST Error:", error.message);
    }
  };

  const handleLogin = () => {
    if (email && password) {
      setLoading(true);

      const data = postData();
      if (data.ok) {
        setLoading(false);
        navigation.replace("Home");
      } else {
        setLoading(false);
        Alert.alert("Something Went Wrong");
      }
    } else {
      Alert.alert("Enter Email and Password");
    }
  };

  const handleemail = (val) => {
    setEmail(val);
  };
  const handlPass = (val) => {
    setPassword(val);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <LottieView
          source={require("../assets/Animation.json")}
          autoPlay
          loop
          style={styles.anim}
        />
      </View>

      <View style={styles.inputOuterView}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.inputEmail}>
          <Ionicons name="at" size={24} color={"black"} />
          <TextInput
            placeholder="Email ID"
            style={styles.inputBox}
            value={email}
            onChange={handleemail}
          />
        </View>

        <View style={styles.inputPass}>
          <Ionicons name="lock-closed" size={24} color={"black"} />
          <TextInput
            placeholder="Password"
            style={styles.inputPassBox}
            value={password}
            onChange={handlPass}
             secureTextEntry={!showPassword}
          />

          {/* <Ionicons
            name="eye"
            size={24}
            color={"black"}
            style={{ marginLeft: 258 }}
          /> */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
              style={{ marginLeft: 38 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.forgetPass}>Forget Password</Text>

        <Button
          title="Login"
          style={styles.LoginButton}
          onPress={handleLogin}
        />
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <View style={{ borderBottomWidth: 1, width: "45%" }}></View>
          <Text style={{ fontSize: 18, margin: 10 }}>OR</Text>
          <View style={{ borderBottomWidth: 1, width: "45%" }}></View>
        </View>

        <TouchableOpacity style={styles.googleIcon}>
          <Ionicons name="logo-google" size={35} color={"black"} />

          <Text style={{ fontSize: 18, marginLeft: 50 }}>
            Login with Google{" "}
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 18 }}>
          New to Logistics? <Text style={{ color: "#00CCCD" }}>Register</Text>{" "}
        </Text>
      </View>

      {isLoading && <Loader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  anim: {
    alignItems: "center",
    height: 300,
    width: "90%",
  },
  inputOuterView: {},
  inputOuterView: {},
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  inputEmail: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  inputBox: {
    width: "90%",
    marginLeft: 2,
    marginLeft: 10,
  },
  inputPass: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  inputPassBox: {
    marginLeft: 10,
    width: 280,
  },
  forgetPass: {
    color: "#00CCCD",
    textAlign: "right",
    margin: 20,
  },
  googleIcon: {
    flexDirection: "row",
    backgroundColor: "#EAF0F1",
    alignItems: "center",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 30,
    marginTop: 16,
  },
});
