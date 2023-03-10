import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/home'
import SplashScreen from '../../screens/splash'
import LoginScreen from '../../screens/login'
import SearchScreen from '../../screens/search'
import ProductDetailScreen from '../../screens/productDetail'

const Stack = createNativeStackNavigator()
const EmpyComponent = ()=>{
    return <Text>Hello</Text>
}
export default function MainNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='splashScreen'>
            <Stack.Screen name="homeScreen" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="loginScreen" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="searchScreen" component={SearchScreen} options={{headerShown:false}} />
            <Stack.Screen name="splashScreen" component={SplashScreen} options={{headerShown:false}} />
            <Stack.Screen name="productDetailScreen" component={ProductDetailScreen} options={{headerShown:false}} />
        </Stack.Navigator>
        <StatusBar barStyle="default" />
    </NavigationContainer>
  )
}