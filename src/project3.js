import {Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Project3 =()=>{
    const onPress = ()=>
    {
        
    }
    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button1} onPress ={()=>alert("Xin chào các bạn")}>
                <Text style={myStyle.textbutton}>
                    Say Hello
                </Text>
            </TouchableOpacity>
            <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button2} onPress ={()=>alert("Tạm biệt các bạn")}>
                <Text style={myStyle.textbutton}>
                    Say Goodbye
                </Text>
            </TouchableOpacity>
    </View>
    </View>
    
    )
}
export default Project3;
const myStyle= StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
        },
        textbutton:{
            color:"white",
            fontWeight: "bold"
        },
        button1:{
            width:100,
            height:50,
            border:2,
            backgroundColor: "pink",
            alignItems:"center",
            justifyContent:"center",
        },
        button2:{
            width:150,
            height:50,
            border:2,
            backgroundColor: "aqua",
            alignItems:"center",
            justifyContent:"center",
            margin:10
        }
    }
)