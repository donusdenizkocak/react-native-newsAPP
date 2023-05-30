import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    image:{
        margin:15,
        height: Dimensions.get('window').height /4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    description:{
        marginTop:3
    },
    inner_container:{
        padding:5,
    },
    author:{
        textAlign:"right",
        fontStyle:"italic"
    }
})