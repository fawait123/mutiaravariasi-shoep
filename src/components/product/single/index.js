import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'

export default function ProductSingle({item}) {
    console.log('items',item)
  return (
    <TouchableOpacity style={style.container}>
        <Image source={{uri:'https://picsum.photos/200/300'}} style={style.itemImage} />
        <View style={style.containerDesc}>
            <Text style={style.itemTitle}>{`${item.item.name.title} ${item.item.name.first} ${item.item.name.last}`}</Text>
            <Text style={style.itemSubTitle}>Rp. 10.000.000,-</Text>
        </View>
    </TouchableOpacity>
  )
}