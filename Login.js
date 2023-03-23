import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image1} source={{ uri: 'https://img.icons8.com/nolan/64/starburst-shape.png' }} />
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Reach Your </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Goals!</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Join us</Text>
            <TextInput placeholder='E-mail' style={{ borderWidth: 1, borderColor: 'grey', padding: 8, margin: 15,paddingHorizontal:120, }} />
           <TextInput placeholder='Password' style={{ borderWidth: 1, borderColor: 'grey', padding: 8, margin: 15,paddingHorizontal:100, }} />
            <TouchableOpacity style={{ backgroundColor: "skyblue", borderRadius: 15, borderColor: "#FFFFFF", borderWidth: 1, width: 180 }}>
                <Text style={{ padding: 8, textAlign: 'center', fontSize: 16,color:'white' }}>Create Account</Text>             
            </TouchableOpacity>
            <Text style={{ padding: 8, textAlign: 'center', fontSize: 14,fontWeight: 'bold' }}>Sign up with</Text>
            <TouchableOpacity>
            <Image style={styles.image01} source={{ uri: 'https://img.icons8.com/ios-filled/50/null/facebook-new.png' }} />
            </TouchableOpacity>   
            <Text style={{ padding: 8, fontSize: 10, textAlign: 'center', fontSize: 16,fontWeight: 'bold' }}>Already have an account? Sing in</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:60
      },
    image1: { 
        height: 100,
        width: 100,
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    image01: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },

})