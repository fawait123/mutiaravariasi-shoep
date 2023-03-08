import { StyleSheet } from "react-native";
import { COLOURS } from "../../../../constants/global";

const style = StyleSheet.create({
    container:{
        backgroundColor:COLOURS.gray1,
        flex:1,
        paddingHorizontal:50
    },
    containerHeader:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },
    containerSearch:{
        flexDirection:'row',
        height:60,
        flex:1,
        borderColor:COLOURS.gray,
        borderWidth:2,
        borderRadius:30,
        alignItems:'center'
    },
    textTitle:{
        fontSize:34,
        fontWeight:'bold',
        marginTop:55
    }
})


export default style;