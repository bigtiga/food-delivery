import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import * as Icon from "react-native-feather"
import Categories from '../components/categories'
import { featured } from '../constants'
import FeatureRow from '../components/featureRow'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
        <StatusBar barStyle="dark-content"/>
      <View className="flex-row items-center space-x-2 px-1 pb-3" style={{marginTop:10,width:420,left:2 }}> 
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <Icon.Search width={25} height={25} stroke={"gray"} />
        <TextInput placeholder='RestaurDry' className="ml-2 flex-1"/>

        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke={"gray"}/>
            <Text className="text-gray-500">Buckhead, Atlanta Ga</Text>


        </View>
      </View>

      <View className="p-3 rounded-full " style={{right:7,backgroundColor:"orange"}}>
        <Icon.Sliders width={25} height={25} stroke={"gray"}/>
      </View>
      </View>

      {/* Main  */}
      <ScrollView showsVerticalScrollIndicator={true}
      contentContainerStyle={{paddingBottom:20}}>


        <Categories/>
        
        <View className='mt-5'>
            {
                [featured,featured,featured].map((item,index)=>{
                    return(
                        <FeatureRow
                        key={index}
                        title={item.title}
                        restaurants={item.restaurants}
                        description={item.description}
                        />
                        
                    )
                })
            }
        </View>
        


      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;