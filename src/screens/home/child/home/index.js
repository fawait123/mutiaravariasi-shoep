import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductSingle from '../../../../components/product/single';
import style from './style';
import { ActivityIndicator } from 'react-native-paper';
import { COLOURS } from '../../../../constants/global';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import ProductList from '../../../../components/product/list';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
 const [loading,setLoading] = useState(false)
 const [currentPage,setCurrentPage] = useState(1)
 const [datas,setDatas] = useState([])
 const data = [1,2,3,4,5,6];
 const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
         <Feather name="align-left" size={30} style={{marginRight:26}} color="black" />
         <TouchableOpacity style={style.containerSearch} onPress={()=>navigation.navigate('searchScreen')}>
         <Feather name="search" style={{marginRight:12, marginLeft:21}} size={24} color="black" />
            <Text style={{fontSize:17, fontWeight:'500',color:COLOURS.gray}}>Search</Text>
         </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.textTitle}>Order online collect in store</Text>
        <ProductList />
      </ScrollView>
    </View>
  )
}