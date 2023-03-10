import { StyleSheet } from "react-native";
import { COLOURS } from "../../../constants/global";

const style = StyleSheet.create({
    container:{
        marginVertical:70
    },
    containerCard:{
        width:220,
        height:317,
        backgroundColor:COLOURS.white,
        justifyContent:'center',
        alignItems:'center',
        marginTop:105,
        marginHorizontal:34,
        borderRadius:20
    },
    overlay:{
        borderRadius:100,
        position:'absolute',
        top:-50
    },
    textTitle:{
        fontSize:22,
        fontWeight:'500',
        color:COLOURS.black,
        marginTop:35
    },
    textDesc:{
        fontSize:16,
        fontWeight:'500',
        color:COLOURS.gray,
        marginTop:10
    },
    textPrice:{
        fontSize:17,
        fontWeight:'600',
        color:COLOURS.blue,
        marginTop:36
    },
    textMore:{
        fontSize:15,
        fontWeight:'600',
        color:COLOURS.blue
    }
})

export default style