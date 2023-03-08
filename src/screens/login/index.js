import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { Feather } from '@expo/vector-icons'
import { COLOURS } from '../../constants/global'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
const navigation = useNavigation()
  const actionLogin = ()=>{
    navigation.navigate('homeScreen')
  }
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <Text style={style.textItem}>Welcome Back</Text>
        <View style={style.overlay}>
        <Text style={{fontSize:18, fontWeight:'500',color:COLOURS.black, marginBottom:20}}>Login</Text>
        <View style={style.formGroup}>
            <View style={style.containerLabel}>
                <Feather name="mail" size={24} color={COLOURS.gray} />
                <Text style={style.labelText}>Email</Text>
            </View>
            <TextInput style={style.itemInput} placeholder='Test@gmail.com' />
        </View>
        <View style={style.formGroup}>
            <View style={style.containerLabel}>
                <Feather name="key" size={24} color={COLOURS.gray} />
                <Text style={style.labelText}>Password</Text>
            </View>
            <View>
                <TextInput secureTextEntry={true} style={style.itemInput} placeholder='******' />
                <Text style={{
                    position:'absolute',
                    right:0,
                    top:12,
                    color:COLOURS.blue
                }}>Show</Text>
            </View>
        </View>
        <Text style={style.textForgot}>Fogot Passcode?</Text>
        <TouchableOpacity style={style.containerButton} onPress={()=>actionLogin()}>
            <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
        <Text style={style.textCreateAccount}>Create Account</Text>
      </View>
    </ScrollView>
  )
}