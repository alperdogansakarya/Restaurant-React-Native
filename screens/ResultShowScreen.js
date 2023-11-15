import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import yelp from '../api/yelp';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function ResultShowScreen({route}) {

    const [result, setResult] = useState(null)
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }

  return (
    <View>
          <Text style={styles.title}>{result.name}</Text>
          <Text style={styles.phone}>{result.phone}</Text>
          <View style={styles.icon}>
          {result.is_closed ? (<AntDesign name="closecircleo" size={30} color="black" />)
           : (<MaterialIcons name="delivery-dining" size={30} color="black" />)}
               
          </View>
         


          <FlatList
          data={result.photos}
              renderItem={({ item }) => {
                  return <Image
                  source={{uri: item}}
                  style={styles.image}
                  />
          }}
          
          
          />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        margin: 10,
        borderRadius:20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 7,
        alignSelf: 'center',
        backgroundColor: 'purple',
        color: 'white',
        padding: 10,
        borderRadius:10
    },
    phone: {
        alignSelf:'center',
        fontSize: 18,
        backgroundColor:'purple',
        color: 'white',
        padding: 10,
        borderRadius:10
    },
    icon: {
        alignSelf: 'center',
        
    }
})