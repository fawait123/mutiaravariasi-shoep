import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLOURS } from '../../../constants/global'
import style from './style'

export default function ProductList() {
    const [category, setCategory] = useState(0)
    const data = [
        'All Category',
        'Car LED',
        'Ban',
        'Window',
        'Interior',
        'Eksterior'
    ]

    const products = [
        {
            id:1,
            name:'Apple Watch',
            desc:'Color 6 Red',
            price:359,
            image:require('./../../../../assets/Jam.png')
        },
        {
            id:2,
            name:'Apple Watch',
            desc:'Color 6 Red',
            price:359,
            image:require('./../../../../assets/Jam.png')
        },
        {
            id:3,
            name:'Apple Watch',
            desc:'Color 6 Red',
            price:359,
            image:require('./../../../../assets/Jam.png')
        },
        {
            id:4,
            name:'Apple Watch',
            desc:'Color 6 Red',
            price:359,
            image:require('./../../../../assets/Jam.png')
        },
        {
            id:5,
            name:'Apple Watch',
            desc:'Color 6 Red',
            price:359,
            image:require('./../../../../assets/Jam.png')
        }
    ]
  const changeActiveCategory = (index)=>{
    setCategory(index)
  }
  const CategoryList = ({item,index})=>{
    return <TouchableOpacity onPress={()=>changeActiveCategory(index)}>
        <View style={{
            marginRight:24,
        }}>
        <Text style={{
            fontSize:17,
            letterSpacing:1,
            fontWeight:'500',
            color:index === category ? COLOURS.blue : COLOURS.gray,
        }}>{item}</Text>
        {index === category ? <View style={{
            width:'100%',
            height:3,
            backgroundColor:'blue',
            borderRadius:10,
            marginTop:10
        }}/>:<></>}
        </View>
    </TouchableOpacity>
  }

  const ProductList = ({item})=>{
    return <View style={style.containerCard}>
        <View style={style.overlay}>
            <Image source={item.image} style={{
                width:120,
                height:120
            }} />
        </View>
        <Text>{item.name}</Text>
        <Text>{item.desc}</Text>
        <Text>{item.price}</Text>
    </View>
  }


  return (
    <View style={style.container}>
      <View>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true} 
        data={data} 
        keyExtractor={item=>item} 
        renderItem={({item,index})=><CategoryList item={item} index={index} />} />

        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={products} 
        keyExtractor={item=>item.id} 
        renderItem={({item})=><ProductList item={item} />} />
      </View>
    </View>
  )
}