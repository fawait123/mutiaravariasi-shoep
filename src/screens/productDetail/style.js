import { Dimensions, StyleSheet } from "react-native";
import { COLOURS } from "../../constants/global";

const style = StyleSheet.create({
    container:{
        backgroundColor:COLOURS.gray1,
        flex:1,
    },
    containerHeader:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        justifyContent:'space-between',
        position:'absolute',
        width:Dimensions.get('window').width,
        zIndex:999
    },
    containerSlider:{
        flex:1,
    },
    containerBottom:{
        position:'relative',
        backgroundColor:COLOURS.white,
        bottom:0,
        width:Dimensions.get('window').width,
        height:400,
        borderRadius:20,
        padding:40
    },
    textTitle:{
        fontSize:28,
        fontWeight:'500',
        color:COLOURS.black,
    },
    textColor:{
        fontSize:17,
        fontWeight:'500',
        marginTop:10
    },
    color:{
        flex:1,
        height:40,
        marginHorizontal:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderColor:COLOURS.gray,
        borderWidth:1
    },
    containerCOlor:{
        flexDirection:'row',
        marginTop:10
    },
    colorRounded:{
        width:16,
        height:16,
        borderRadius:100,
        backgroundColor:"red",
        marginRight:5
    }
})

export default style