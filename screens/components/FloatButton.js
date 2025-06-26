// components/FloatIcon.js

import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const FloatButton = ({ onPress, icon = 'add', size = 28, color = '#fff', backgroundColor = '#007BFF' }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.fab, { backgroundColor }]}>
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
});

export default FloatButton;
