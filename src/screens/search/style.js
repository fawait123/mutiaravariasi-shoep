import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/global";

const style = StyleSheet.create({
    container:{
        backgroundColor:COLOURS.gray1,
        flex:1,
        paddingHorizontal:50,
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
        alignItems:'center',
        overflow:'hidden'
    },
    textTitle:{
        fontSize:34,
        fontWeight:'bold',
        marginTop:55
    },
    containerContent:{
        flex:1,
        alignItems:'center'
    },
    containerText:{
        alignItems:'center'
    },
    containerProduct:{
        flex:1,
        height:253,
        backgroundColor:COLOURS.white,
        marginHorizontal:5,
        marginVertical:50,
        borderRadius:10,
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default style