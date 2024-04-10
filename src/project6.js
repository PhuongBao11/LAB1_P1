import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Project6 =()=>{
        const Square =({text, bgcolor = "aqua"})=>(
            <View style={[myStyle.box, {backgroundColor: bgcolor}]}>
                <Text>{text}</Text>
            </View>

    )
        const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    return(
        <ScrollView style={myStyle.container}>
            {data.map((item, index)=>(
                <Square key={item} text={`Square ${index +1}`}/>
            ))}
        </ScrollView>
        )
}
export default Project6;
const myStyle= StyleSheet.create(
    {
        container:{
            backgroundColor: "#FFFFCC",
        },
        box:{
            width:100,
            height:100,
            alignItems:"center",
            justifyContent:"center",
            margin:20
        },
    }
)