import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { Feather } from '@expo/vector-icons'
import { COLOURS } from '../../constants/global'

export default function ProductDetailScreen({route}) {
const navigation = useNavigation()
  const id = route.params.productID
  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Feather name="arrow-left" size={30} style={{marginLeft:26}} color="black" />
         </TouchableOpacity>
        <TouchableOpacity>
            <Feather name="star" size={30} style={{marginRight:26}} color="black" />
        </TouchableOpacity>
      </View>
      <View style={style.containerSlider}>
        <Text>Gambar</Text>
      </View>
     <View  style={style.containerBottom}>
     <ScrollView showsVerticalScrollIndicator={false}>
     <Text style={style.textTitle}>2020 Apple iPad Air 10.9"</Text>
        <Text style={style.textColor}>Colors</Text>
        <View style={style.containerCOlor}>
            <View style={style.color}>
                <View style={{...style.colorRounded, backgroundColor:'#7485C1'}} />
                <Text>Sky blue</Text>
            </View>
            <View style={{...style.color, borderWidth:2}}>
                <View style={{...style.colorRounded, backgroundColor:'#C9A19C'}} />
                <Text>Rose gold</Text>
            </View>
            <View style={style.color}>
                <View style={{...style.colorRounded, backgroundColor:'#A1C89B'}} />
                <Text>Green</Text>
            </View>
        </View>
        <View style={{
            marginTop:20
        }}>
            <Text style={{
                fontSize:17,
                fontWeight:'600',
                color:COLOURS.black
            }}>Get Apple TV+ free for a year</Text>
            <Text style={{
                 fontSize:17,
                 fontWeight:'400',
                 color:COLOURS.gray,
                 marginTop:7
            }} >Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.</Text>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:10
            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'600',
                    color:COLOURS.blue
                }}>Full Description</Text>
                <Feather name="arrow-right" size={16} color={COLOURS.blue} />
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:20
            }}>
                <Text style={{
                    fontSize:17,
                    color:COLOURS.black
                }}>Total</Text>
                <Text style={{
                      fontSize:17,
                      fontWeight:'600',
                      color:COLOURS.blue
                }}>$ 579</Text>
            </View>
        </View>
        <TouchableOpacity style={{
            height:70,
            width:'100%',
            backgroundColor:COLOURS.blue,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:30,
            borderRadius:10
        }}>
            <Text style={{
                fontSize:20,
                fontWeight:'500',
                color:COLOURS.white
            }}>Add to basket</Text>
        </TouchableOpacity>
     </ScrollView>
     </View>
    </View>
  )
}