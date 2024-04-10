import {Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Project5 =()=>{
        const Square =({text, bgcolor = "aqua"})=>(
            <View style={[myStyle.box, {backgroundColor: bgcolor}]}>
                <Text>{text}</Text>
            </View>

    )
    return(
        <View style={myStyle.container}>
            <Square text="Square 1"></Square>
            <Square text="Square 2" bgcolor="#3366CC"></Square>
            <Square text="Square 3" bgcolor="#CC3399"></Square>
        </View>
    )

}
export default Project5;
const myStyle= StyleSheet.create(
    {
         box:{
            width:100,
            height:100,
            border:2,
            backgroundColor: "red",
            alignItems:"center",
            justifyContent:"center",
        },
        container:{
            flex:1,
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-around",
        }
    }
)