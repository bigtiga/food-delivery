import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (!cartItems.length) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        style={{ backgroundColor: "orange" }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
          <Text className="font-bold text-white text-lg">{cartItems.length}</Text>
        </View>
        <Text className="flex-1 text-center font-bold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-bold text-white text-lg">
          ${cartTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
