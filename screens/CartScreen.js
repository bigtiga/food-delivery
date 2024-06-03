import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { featured } from '../constants';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartScreen = () => {
  const navigation = useNavigation();
  const [groupedItems,setGroupedItems] = useState({})
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal) 
  const dispatch = useDispatch();
  const deliveryFee = 4;


  useEffect(()=>{
    const item = cartItems.reduce((group,item)=>{
      if(group[item.id]){
        group[item.id].push(item)

      }else{
        group[item.id] = [item]
      }
      return group;
    },{})
    setGroupedItems(item)

  },[cartItems])
  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: 'orange' }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-xl font-bold text-center">Your Cart</Text>
          <Text className="text-gray-500 text-center">{restaurant.name}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#FFA50080',height:130 }} className="flex-row px-4 items-center">
      <FontAwesome name="biking" size={50} color="white" /> 
      <Text className= "flex-1 pl-7 text-lg ">Deliver in 15 - 25 minutes</Text> 
      <TouchableOpacity style={{backgroundColor:"orange",fontWeight:"bold",padding:10,borderRadius:10}}>
        <Text>Change</Text>
        </TouchableOpacity>   
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:40

      }}
      className="bg-white pt-5"
      >
        {
          Object.entries(groupedItems).map(([key,items]) =>{
            let dish = [0];
            return(
              <View key={key}
              style={{backgroundColor:"whitesmoke"}}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-2xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{color:"orange"}}>
                {items.length} x 
                </Text>
                <Image className="h-14 w-14 rounded-full" source={{uri:dish.image}}/>
                <Text className= "flex-1 font-bold text-gray-600">{dish.name}</Text>
                <Text className="font-semibold text-base">${dish.price}</Text>
                <TouchableOpacity
                className="p-1 rounded-full"
                style={{backgroundColor:"orange"}}
                onPress={()=> dispatch(removeFromCart({id:dish.id}))}
                >
                  <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
                </TouchableOpacity>
              </View>
            )

          })
        }

      </ScrollView>
      <View className="p-5 px-5 rounded-t-3xl space-y-4" style={{backgroundColor:"#FFA50080"}}>
        <View className="flex-row justify-between">
          <Text className="text-gray--600">Subtotal</Text>
          <Text className="text-gray--600">${cartTotal}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray--600">Delivery Fee</Text>
          <Text className="text-gray--600">${deliveryFee}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray--600 font-extrabold">Order Total</Text>
          <Text className="text-gray--600 font-extrabold">${deliveryFee + cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("PreparingOrder")}
          style={{backgroundColor:"orange"}} className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>

          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
};

export default CartScreen;
