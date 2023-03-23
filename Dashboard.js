import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ backgroundColor: '#4d79ff' , height: 230,  borderRadius: 65, alignItems: 'center', }}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center',marginTop:40 }}>My Goals</Text>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', padding: 10, borderRadius: 10, margin: 20, borderColor: 'white', borderWidth: 1 }}>Year</Text>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', padding: 10, borderRadius: 10, margin: 20, borderColor: 'white', borderWidth: 1 }}>Month</Text>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', padding: 10, borderRadius: 10, margin: 20, borderColor: 'white', borderWidth: 1 }}>Day</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 25 }}>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'right', }}>Repeat  {'\n'} Every  Sunday</Text>
                    <Text style={{ fontSize: 15, color: 'white', }}>_______________</Text>
                    <Text style={{ fontSize: 15, color: 'white', }}>Goal {'\n'}  Exercise</Text>
                </View>
                <View style={{ top: 60,marginLeft:50  }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', }}>Your Progress</Text>
                    <Text style={{ fontSize: 16, color: 'black', }}>Review</Text>
                    <View >
                        <Image style={styles.image1} src="https://www.howtogeek.com/wp-content/uploads/2020/01/curved-line-graph.png?trim=1,1&bg-color=000&pad=1,1" />

                    </View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold',marginTop:20 }}>Notes</Text>
                    <View style={{ backgroundColor: '#b3b3b3',marginTop:10,width:330 }}>
                        <Text style={{fontSize:15,}}>
                            How do you make a curved line graph?
                            Image result for curve line graph
                            The line graph is inserted with straight lines corresponding to each data point. To edit this to a curved”
                        </Text>

                    </View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold',marginTop:20 }}>Performance</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image src="https://img.icons8.com/color/48/null/filled-star--v1.png" style={styles.star}/>
                        <Image src="https://img.icons8.com/color/48/null/filled-star--v1.png" style={styles.star}/>
                        <Image src="https://img.icons8.com/color/48/null/filled-star--v1.png" style={styles.star}/>
                        <Image src="https://img.icons8.com/color/50 /null/filled-star--v1.png" style={styles.star}/>
                        <Image src="https://img.icons8.com/ios/48/null/christmas-star.png" style={styles.star}/>
                        <Image style={styles.image2} source={{ uri: 'https://img.icons8.com/ios-filled/50/null/death-star.png' }}/>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      },
    image1: {
        height: 200,
        width: 310,      
        resizeMode: 'contain'

    },

    star:{

        height: 30,
        width: 30,
        alignContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    image2: {
        alignItems: 'center',
        height: 50,
        width: 50,
       
        resizeMode: 'contain',
        paddingLeft:225

    
    
      },
})