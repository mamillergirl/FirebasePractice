import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { getAuth} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const AddRideScreen = () => {
    const auth = getAuth();
    const [rides, setRides] = useState([])
    const navigation = useNavigation()

    const addItemToArray = (doc) => {
        const rideArray = [...rides, doc];

        setRides(rideArray);
      }
    const getRides = async() => {
        const querySnapshot = await getDocs(collection(db, "rides"));
        querySnapshot.forEach((doc) => {
           
            addItemToArray(doc)
        });
       
    
       
    }
    useEffect(() =>{
        getRides()
          
    }, [])
   

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
        <View>
      {rides.map((ride) => (
        <Text key={ride.id} >{ride.data().startingPoint}</Text>
      ))}
    </View>
        <TouchableOpacity
            style ={styles.button}
            onPress = {() => {rides.forEach((ride) => {
                console.log(`${ride.id} => ${ride.data().startingPoint}`);
              });}} 
            >
            <Text style={[styles.button, styles.buttonText]}>Submit Ride</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AddRideScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer : {
        width: '80%',

    }, 
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button : {
        backgroundColor: '#0702F9',
        width: '90%',
        padding: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline :{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText : {
        backgroundColor: 'white',
        fontWeight: '700',
        fontSize: 16,
        color: '#0782F9',

    }
    
})