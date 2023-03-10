import { Dimensions, StyleSheet } from "react-native";
import { COLOURS } from "../../constants/global";

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOURS.blue,
        position:'relative'
    },
    textItem:{
        fontSize:65,
        color:COLOURS.white,
        fontWeight:'600',
        marginHorizontal:50,
        marginTop:70
    },
    overlay:{
        position:'relative',
        backgroundColor:COLOURS.white,
        width:Dimensions.get('window').width,
        height:647,
        top:40,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:50
    },
    containerLabel:{
        flexDirection:'row',
        alignItems:'center'
    },
    labelText:{
        marginLeft:11,
        fontSize:15,
        fontWeight:'500',
        color:COLOURS.gray
    },
    itemInput:{
        borderBottomColor:COLOURS.gray,
        borderBottomWidth:1,
        paddingBottom:10,
        fontSize:17,
        fontWeight:'500',
        marginTop:10
    },
    formGroup:{
        marginVertical:10
    },
    textForgot:{
        fontSize:15,
        color:COLOURS.blue,
        fontWeight:'500',
        marginTop:24
    },
    containerButton:{
        width:314,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLOURS.blue,
        marginTop:62,
        borderRadius:10
    },
    textButton:{
        fontSize:20,
        fontWeight:'500',
        color:COLOURS.white
    },
    textCreateAccount:{
        fontSize:17,
        fontWeight:'500',
        color:COLOURS.blue,
        alignSelf:'center',
        marginTop:19
    }
})
export default style