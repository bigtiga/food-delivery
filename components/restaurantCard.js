import { View, Text, TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native'

const restaurantCard = React.memo(({item}) => {
    
    
    const imageUri = 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg';
    const navigation = useNavigation();



  return(
    <TouchableWithoutFeedback
    onPress={()=>{
        navigation.navigate('RestaurDry', {...item})
     }}
    >
        <View className="mr-6 bg-white rounded-3xl shadow-lg"style={{shadowColor:"orange",shadowRadius:7}}>
            <Image className="h-36 w-64 rounded-t-2xl " source= {{uri:imageUri}}/>
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold">{item.name}</Text>
                <View className="flex-row" items-center space-x-1>
                    <Text className="tx-xs">
                        <Text className="text-green-600">
                            {item.stars}
                        </Text>
                        <Text className="text-gray-700" >({item.reviews} reviews)</Text>
                        <Text className="font-semibold " style={{}}>  {item.category} </Text>
                    
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="gray" width="15" height="15"/>
                    <Text className="text-gray-700 text-xs font-semibold">Nearby : {item.address}</Text>



                </View>
                </View>

        </View>
    </TouchableWithoutFeedback>

  )
})

export default restaurantCard;