import {StyleSheet, Text, View } from "react-native"; 

const Project1 =()=>{
    return (
        <View style={myStyle.Viewstyle}>
        <Text style={myStyle.Textstyle}>
            Hello World!
        </Text>
    </View>
    )
}
export default Project1;
const myStyle= StyleSheet.create(
    {
        Textstyle:{
            color:"black",
            fontWeight: "bold",
            fontSize:20
        }, 
        Viewstyle:{
            width:150,
            height:150,
            backgroundColor:"aqua",
            alignItems:"center",
            justifyContent:"center",
        }
    }
)