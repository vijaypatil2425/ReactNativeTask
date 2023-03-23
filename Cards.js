import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Image,Divider } from 'react-native';
const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={{ color: 'white' }}>{name}</Text>
      <View style={{flexDirection:'row'}}>
      <Image src="https://img.icons8.com/color/48/null/filled-star--v1.png" style={styles.star}/>
      <Image src="https://img.icons8.com/color/48/null/filled-star--v1.png" style={styles.star}/>
      <Image src="https://img.icons8.com/color/48/null/filled-star--v1.png" style={styles.star}/>
      <Image src="https://img.icons8.com/ios/48/null/christmas-star.png" style={styles.star}/>
      <Image src="https://img.icons8.com/ios/48/null/christmas-star.png" style={styles.star}/>
      
      </View>

      
      

    </View>
  );
}
export default function Cards() {

  const countries = [
    {
      id: '1',
      name: 'Read New Books',
    },
    {
      id: '2',
      name: 'Read  Every Day',
    },
    {
      id: '3',
      name: 'Working Out',
    },
    {
      id: '4',
      name: 'Repeat Every Day',
    },
    {
      id: '5',
      name: 'Watch New Series',
    },
    {
      id: '6',
      name: 'Repeat Every Sunday',

    },

    {
      id: '7',
      name: 'New Podcast',

    },
    {
      id: '8',
      name: 'Repeat Every Friday',

    },
    {
      id: '9',
      name: 'Create',
    },
    {
      id: '10',
      name: 'Repeat'
    }

  ];
  const renderItem = ({ item }) => (
    <Item name={item.name} />


  );
  return (
    <View >
      <View style={{ backgroundColor: '#4d79ff', height: 80, top: 10, borderRadius: 20, }}>
        <Text style={{ fontSize: 20,top:20, color: 'white', textAlign: 'center', }}>Habits</Text>
      </View>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns='2'
      />
    </View>
  );
}
const styles = StyleSheet.create({
 
  item: {
    backgroundColor: '#4d79ff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    marginTop: 25,
    marginVertical:10,
   
  },
  star:{

    height: 10,
    width: 10,
    alignContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
},
});