import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurDry from './screens/RestaurDry';
import CartScreen from './screens/CartScreen';
import PreparingOrder from "./screens/PreparingOrder"
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const Navigation = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RestaurDry" component={RestaurDry} />
          <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
          <Stack.Screen name="PreparingOrder" options={{presentation:"fullScreenModal"}} component={PreparingOrder} />
          <Stack.Screen name="DeliveryScreen" options={{presentation:"fullScreenModal"}} component={DeliveryScreen} />



        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default Navigation;
