import React from 'react';
import { View,Text,Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../constants';
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const coordinates = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.023,
    longitudeDelta: 0.023
  };
  const cancelOrder = ()=>{
    navigation.navigate("Home")
    dispatch(emptyCart())
  }
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        provider={MapView.PROVIDER_GOOGLE}
        // Set API key using the `providerProps` prop
        providerProps={{ 
          googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY 
        }}
        mapType='standard'
        className="flex-1"
        >
        {/* Marker for the hardcoded location */}
        <Marker coordinate={{
            latitude:coordinates.latitude,
            longitude:coordinates.longitude,
        }} 
        title={restaurant.name}
        description={restaurant.description}
        pinColor="orange"
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
            <View>
                <Text className="text-lg text-gray-700 font semibold">
                    Estimated Arrival
                </Text>
                <Text className="text-3xl font-extrabold text-gray-600">
                    15-25 Minutes
                </Text>
                <Text className= "mt-2 mb-4 text-gray-600 font-semibold">
                    Your order is on his way
                </Text>

            </View>
        </View>
        <View style={{backgroundColor:"orange"}}
        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View className="p-1 rounded-full"
            style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
                <Image className="h-16 w-16 rounded-full" source={require("../assets/images/freeimage.jpg")}/>

            </View>
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">
                    Tiga Developer
                </Text>
                <Text className=" font-semibold text-white">
                    drop off to you
                </Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
                <TouchableOpacity className="bg-white p-2 rounded-full">
                  <Icon.Phone
                  fill={{BackgroundColor:"orange"}} stroke={"orange"}
                  />
                    </TouchableOpacity>

                <TouchableOpacity
                onPress={cancelOrder}
                
                className="bg-white p-2 rounded-full">
                  <Icon.X
                  fill={{BackgroundColor:"orange"}} stroke={"red"} strokeWidth={5}
                  />
                

                </TouchableOpacity>


            </View>

        </View>

      </View>
    </View>
  );
};

export default DeliveryScreen;
