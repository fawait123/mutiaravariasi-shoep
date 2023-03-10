import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Image, Dimensions, Animated } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { Feather } from '@expo/vector-icons'
import { COLOURS } from '../../constants/global'

const width = Dimensions.get('window').width
export default function ProductDetailScreen({route}) {
const navigation = useNavigation()
  const id = route.params.productID
  const data = [
    {
        id:1,
        image:require('./../../../assets/Jam.png')
    },
    {
        id:2,
        image:require('./../../../assets/Jam.png')
    },
    {
        id:3,
        image:require('./../../../assets/Jam.png')
    }
  ];

    const SPACING = 5;
    const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
    const BORDER_RADIUS = 20;
    // This constant is defined outside of the `<ImageCarousel>` component.
    const CURRENT_ITEM_TRANSLATE_Y = 48;
    // This line is outside of `renderItem`.
    const scrollX = useRef(new Animated.Value(0)).current;

  const ImageSingle = ({item})=>{
    return <View style={{
        width:Dimensions.get('window').width,

        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Image source={item.image} />
    </View>
  }
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
      <FlatList 
            data={data} 
            horizontal={true}
            keyExtractor={item=>item.id} 
            bounces={false}
            renderToHardwareTextureAndroid
            decelerationRate={0}
            snapToInterval={ITEM_LENGTH}
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
            onScroll={
                Animated.event(
                    [
                    {
                        nativeEvent:{
                            contentOffset:{
                                x:scrollX
                            }
                        }
                    }
                ],
                {
                    useNativeDriver:false
                }
                )
            }
            renderItem={({item})=><ImageSingle item={item} />} />
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