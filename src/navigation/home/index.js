import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { COLOURS } from '../../constants/global';
import Home from '../../screens/home/child/home';

const Tab = createMaterialBottomTabNavigator();
const EmptyComponent = ()=>{
    return <Text>Hallo</Text>
}
export default function HomeNavigation() {
  return (
    <Tab.Navigator 
    initialRouteName='Home' 
    activeColor={COLOURS.white} 
    inactiveColor={COLOURS.gray}
    theme={{
        colors:{
            background: "transparent"
        }
    }}
    barStyle={{
        backgroundColor:COLOURS.gray1,  
        height:50,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20  
    }} >
        <Tab.Screen name="Home" component={Home}   options={{
            tabBarIcon:({focused,color})=><Feather name="home" size={24} color={focused ? COLOURS.blue : COLOURS.black} />,
            tabBarLabel:false,
        }}   />
        <Tab.Screen name="Product" component={EmptyComponent} options={{
            tabBarIcon:({focused, color})=><Feather name="list" size={24} color={focused ? COLOURS.blue : COLOURS.black} />,
            tabBarLabel:false
        }} />
        <Tab.Screen name="Cart" component={EmptyComponent} options={{
            tabBarIcon:({focused,color})=><Feather name="shopping-cart" size={24} color={focused ? COLOURS.blue : COLOURS.black} />,
            tabBarBadge:1,
            tabBarLabel:false
    
        }} />
        <Tab.Screen name="Profile" component={EmptyComponent} options={{
            tabBarIcon:({focused,color})=><Feather name="user" size={24} color={focused ? COLOURS.blue : COLOURS.black} />,
            tabBarLabel:false
        }} />
    </Tab.Navigator>
  )
}