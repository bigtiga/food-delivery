import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './restaurantCard'
import RestaurDry from '../screens/RestaurDry'


const FeatureRow = ({title,description,restaurants}) => {
  return (
    <View>
     <View flex-row justify-between item-center px-4>
        <View style={{marginLeft:10}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>

        </View>

        <TouchableOpacity>
            <Text style={{color:"orange",bottom:30,fontWeight:"bold",left:350}}>See All</Text>
        </TouchableOpacity>

     </View>
     <ScrollView 
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal:10}}
     className="overflow-visible py-15">

     {
            restaurants.map((item, index) => (
            <RestaurantCard 
            key={index} 
            item={item} />
            
            
            ))

        
     }

{
            restaurants.map((item, index) => (
            <RestaurantCard 
            key={index} 
            item={item} />
            
            
            ))

        
     }


   

     </ScrollView>
    </View>
  )
}

export default FeatureRow