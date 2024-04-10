import {Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Project2 =()=>{
    const onPress = ()=>
    {
        Alert.alert("Hello")
    }
    return (
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button} onPress ={onPress}>
                <Text style={myStyle.textbutton}>
                    Click here
                </Text>
            </TouchableOpacity>
    </View>
    )
}
export default Project2;
const myStyle= StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
        },
        button:{
            width:120,
            border:2,
            backgroundColor: "green",
        },
        textbutton:{
            color:"black",
            fontWeight: "bold",
            fontSize: 20
        }
    }
)