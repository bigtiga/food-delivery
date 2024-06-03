import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const PreparingOrder = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("DeliveryScreen")

        },3000)

    },[])
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <FontAwesome name="hotjar" size={80} color="#FFA500" />
      <Text className="text-xl font-bold text-center mt-4">Preparing Your Order</Text>
    </View>
  );
};

export default PreparingOrder;
