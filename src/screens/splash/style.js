import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/global";

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOURS.blue,
        justifyContent:'center',
        alignItems:'center'
    },
    itemText:{
        fontSize:65,
        color:COLOURS.white,
        fontWeight:'600',
        textAlign:'justify'
    },
    containerButton:{
        width:314,
        height:70,
        backgroundColor:COLOURS.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'600',
        color:COLOURS.blue
    }
})

export default style