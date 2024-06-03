import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import DishesRow from '../components/dishesRow';
import CartIcon from '../components/cartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';

const RestaurDry = () => {
    const imageUri = 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg';
    const navigation = useNavigation();
    const { params } = useRoute();
    const item = params;
    const dispatch = useDispatch();

    useEffect(() => {
        if (item && item.id) {
            dispatch(setRestaurant({ ...item }));
        }
    }, [dispatch, item]);

    return (
        <View>
            <CartIcon />
            <StatusBar style="light" />

            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={{ uri: imageUri }} />
                    <TouchableOpacity
                        onPress={() => { navigation.goBack(); }}
                        className="absolute top-8 left-4 bg-orange-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={"orange"} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6">
                    <View className="px-5">
                        <Text className="text-2xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <Text className="tx-xs">
                                    <Text className="text-green-600">{item.stars}</Text>
                                    <Text className="text-gray-700">({item.reviews} reviews)</Text>
                                    <Text className="font-semibold"> {item.category} </Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Icon.MapPin color="orange" width={15} height={15} />
                                <Text className="text-gray-700 text-xs font-semibold"> Nearby: {item.address}</Text>
                            </View>
                        </View>
                        <Text>{item.description}</Text>
                    </View>
                </View>
                <View className="pb-36 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {item.dishes.map((dish, index) => (
                        <DishesRow
                            item={{ ...dish }}
                            key={index}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default RestaurDry;
