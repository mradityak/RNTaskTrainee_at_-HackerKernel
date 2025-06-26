// components/Loader.js

import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Loader = ({ size = "large", color = "#007BFF", overlay = true }) => {
  return (
    <View style={overlay ? styles.overlay : styles.center}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
