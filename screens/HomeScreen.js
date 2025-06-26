import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Product from "./Product";
import FloatButton from "./components/FloatButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const STORAGE_KEY = "@product_list";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, [])
  );

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.trim() === "") {
      loadProducts();
    } else {
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const updatedList = products.filter((item) => item.id !== id);
      setProducts(updatedList);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const renderItemHandler = ({ item }) => {
    return <Product onItemClicked={deleteProduct} item={item} />;
  };

  const onFloatPress = () => {
    navigation.navigate("AddItem");
  };

  const loadProducts = async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerIcon}>
        <View>
        <Ionicons name="arrow-back" size={30} color="black" />
        </View>
        {/* <Ionicons name="search" size={30} color="black" /> */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search products..."
            value={searchText}
            onChangeText={handleSearch}
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Hi-Fi Shop & Service
          </Text>
          <Text style={{ marginTop: 20, fontSize:16 ,color: 'gray',}}>Audio shop on Rustaveli Ave 57.</Text>
          <Text style={{ marginTop: 5, fontSize:16, color: 'gray', }}>
            This shop offers both products and services.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>Products </Text>
            <Text style={{ fontSize: 18, color: "gray" }}>
              {products.length}
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#00CCCD", fontWeight: "bold" }}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemHandler}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          numColumns={2}
          ListEmptyComponent={
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Product Found</Text>
    </View>
  }
        />
      </View>
      <FloatButton onPress={onFloatPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    marginTop:5
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width:200
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 8,
  },
  emptyContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50,
},
emptyText: {
  fontSize: 16,
  color: 'gray',
},

});
