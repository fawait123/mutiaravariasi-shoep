import { StyleSheet } from "react-native";
import { COLOURS, windowWidth } from "../../../constants/global";

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOURS.white,
        margin:5,
        padding:3,
    },
    itemImage:{
        width:'100%',
        height:200
    },
    containerDesc:{
        padding:7,
    },
    itemTitle:{
        letterSpacing:0.5,
        textAlign:'justify',
        marginVertical:5
    },
    itemSubTitle:{
        fontSize:18,
        fontWeight:'500',
        letterSpacing:0.5,
        color:COLOURS.blue,
        marginVertical:10
    }
})

export default style