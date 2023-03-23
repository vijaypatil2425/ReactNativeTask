import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Login from './Login';
import Cards from './Cards';
import Dashboard from './Dashboard';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image1} source={{ uri: 'https://img.icons8.com/ios-filled/50/null/death-star.png' }} />
      <Text style={{ fontWeight: 'bold',}}>Make Your dreams </Text>
      <Text style={{ fontWeight: 'bold',}}> happen!</Text>
      <Image style={styles.image01} source={{ uri: 'https://media.istockphoto.com/id/641798158/es/foto/ni%C3%B1a-en-un-traje-de-astronauta.jpg?s=612x612&w=0&k=20&c=wFgHvUZeaWV47KyvW6ZJocDHLqy095gX_9YHWpSuV5o=' }} />
      <TouchableOpacity style={{ backgroundColor: "skyblue", borderRadius: 15, borderColor: "#FFFFFF", borderWidth: 1, width: 180 }}>
        <Text style={{ padding: 8, fontSize: 10, textAlign: 'center', fontSize: 16, }}>Get started</Text>
      </TouchableOpacity>
      <Text style={{ padding: 8, fontSize: 10, textAlign: 'center', fontSize: 16, }}>Already have an account? Sing in</Text> 
      {/* <Login></Login>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop:40
 
  },
  image1: {
    alignItems: 'center',
    height: 100,
    width: 100,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  image01: {
    alignItems: 'center',
    height: 300,
    width: 300,
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
