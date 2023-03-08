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
    }
})

export default style