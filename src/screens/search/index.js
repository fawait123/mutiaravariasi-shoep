import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import { COLOURS } from '../../constants/global'
import { Feather } from '@expo/vector-icons'
import NotFound from './../../../assets/svg/NotFound.svg'
import { useNavigation } from '@react-navigation/native'

export default function SearchScreen() {
  const navigation = useNavigation();
  const [data,setData] = useState([])
  const [search, setSearch] = useState(null)
  const products = [
    {
        id:1,
        name:'Apple Watch',
        desc:'Color 6 Red',
        price:359,
        image:require('./../../../assets/Jam.png')
    },
    {
        id:2,
        name:'Apple Watch',
        desc:'Color 6 Red',
        price:359,
        image:require('./../../../assets/Jam.png')
    },
    {
        id:3,
        name:'Apple Watch',
        desc:'Color 6 Red',
        price:359,
        image:require('./../../../assets/Jam.png')
    },
    {
        id:4,
        name:'Apple Watch',
        desc:'Color 6 Red',
        price:359,
        image:require('./../../../assets/Jam.png')
    },
    {
        id:5,
        name:'Apple Watch',
        desc:'Color 6 Red',
        price:359,
        image:require('./../../../assets/Jam.png')
    }
  ]
  const getData = ()=>{
    if(search){
      // console.log('ada search')
      let fill = products.filter((el)=>el.name.toLocaleLowerCase().includes(search));
      setData([...fill])
    }else{
      setData([...products])
    }
  }


  useEffect(()=>{
    getData();
  },[search])



  const NotFoundComponent = ()=>{
    return <View>
      <NotFound width={350} height={350} />
        <View style={style.containerText}>
          <Text style={{fontSize:28, fontWeight:'500',color:COLOURS.black}}>Item Not Found</Text>
          <Text style={{fontSize:17, color:COLOURS.gray, marginTop:19}}>Try a more generic search term or try looking for alternative products.</Text>
        </View>
    </View>
  }

  const ProductListComponent = ({item})=>{
    return (
      <View style={style.containerProduct}>
        <Image source={item.image} style={{
          position:'absolute',
          top:-50,
        }}  />
        <Text style={{
          fontSize:22,
          fontWeight:'500',
          marginTop:50,
          color:COLOURS.black
        }}>{item.name}</Text>
        <Text style={{
           fontSize:22,
           fontWeight:'500',
           color:COLOURS.blue
        }}>$ {item.price}</Text>
      </View>
    )
  }

  
  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Feather name="arrow-left" size={30} style={{marginRight:26}} color="black" />
         </TouchableOpacity>
         <View style={style.containerSearch} >
         <Feather name="search" style={{marginRight:12, marginLeft:21}} size={24} color="black" />
            <TextInput placeholder='Search...' style={{fontSize:17, fontWeight:'500',color:COLOURS.gray}} onChangeText={(text)=>setSearch(text)} />
         </View>
      </View>
      <View style={style.containerContent}>
        <Text style={{fontSize:28,fontWeight:"600", color:COLOURS.black, marginTop:52}}>Found {data.length} result</Text>
        {data.length === 0 ? <NotFoundComponent /> : <View style={{flex:1, flexDirection:'row', marginTop:20}}>
          <FlatList 
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={data} 
          keyExtractor={item=>item.id} 
          numColumns={2}
          renderItem={({item})=><ProductListComponent item={item} />} />
        </View>}
      </View>

    </View>
  )
}