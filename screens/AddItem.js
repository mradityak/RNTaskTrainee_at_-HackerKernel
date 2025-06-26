// components/ProductForm.js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const STORAGE_KEY = "@product_list";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    loadProducts();
  }, []);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert(
        "Permission required",
        "Allow access to media library to select image."
      );
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveProduct = async () => {
    if (!name || !price || !image) {
      return Alert.alert(
        "Error",
        "Please fill all fields and select an image."
      );
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      price,
      image,
    };

    const updatedProducts = [newProduct, ...products];
    setProducts(updatedProducts);
    setName("");
    setPrice("");
    setImage(null);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  };

  const loadProducts = async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    console.log('image==',saved)
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Product</Text>

      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Pick Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.preview} />}

      <Button title="Save Product" onPress={saveProduct} />

      <Text style={styles.listTitle}>Saved Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  preview: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 10,
  },
  thumbnail: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  title: { fontWeight: "bold", fontSize: 16 },
  price: { color: "#555" },
  listTitle: { fontSize: 18, marginTop: 20, fontWeight: "600" },
});

export default AddItem;
