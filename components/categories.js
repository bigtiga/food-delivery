import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants';

const Categories = () => {
    const [active_category,setActive_category] = useState(null)


  return (
    <View style={{marginTop:4}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    className="overflow-visible"
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,

    }}
    >
        {
            categories.map((category, index)=>{
                let isActive = category.id == active_category;
                let activeBtn = isActive? "bg-gray-600" : "bg-gray-300";
                let activeText = isActive? "font-semibold text-gray-800":"text-gray-500";



                return(
                    <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity onPress={()=>
                setActive_category(category.id)}
                className={"p-1 rounded-full shadow bg-gray-200" + activeBtn}
              style={{ padding: 1, borderRadius: 999, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#F0F0F0' }}>                      
                <Image style={{width:45,height:45}} source={{uri:category.image}}/>
                        </TouchableOpacity> 

                 <Text className={"text-sm" + activeText}>{category.name}</Text>
  
                   </View>

                )
            })
        }


    </ScrollView>
    </View>
  )
}

export default Categories;