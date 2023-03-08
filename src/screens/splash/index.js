import { View, Text, TouchableOpacity } from 'react-native'
import Car from './../../../assets/svg/Car.svg'
import React from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.itemText}>Mutiara Variasi</Text>
      <Car width={400} height={400} />
      <TouchableOpacity style={style.containerButton} onPress={()=>navigation.navigate('loginScreen')}>
        <Text style={style.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}