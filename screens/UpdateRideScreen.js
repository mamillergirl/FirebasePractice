import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../firebase'
import { doc,  updateDoc } from "firebase/firestore"; 
import { getAuth} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const UpdateRideScreen = ({ route }) => {
    const { documentId } = route.params;
    const {docRef, setDocRef} = useState('')
    const auth = getAuth();
    const [startingPoint, setStartingPoint] = useState('')
    const [destination, setDestination] = useState('')
    const [time, setTime] = useState('')
    const navigation = useNavigation()
    
    
   
    const handleUpdateData = async () => {
        
        const documentRef = doc(db, 'rides', documentId);
       
        await updateDoc(documentRef, { time });
        
      }
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='' 
            //value={ }
            onChangeText = {text => setStartingPoint(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Destination' 
            //value={ }
            onChangeText = {text => setDestination(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Starting Time' 
            //value={ }
            onChangeText = {text => setTime(text)}
            style = {styles.input}
       
            />
            
        </View>
        <View
        style = {styles.buttonContainer}>
            <TouchableOpacity
            style ={styles.button}
    
            onPress = {() => handleUpdateData()}
            >
                <Text style={[styles.button, styles.buttonText]}>Update Ride</Text>
            </TouchableOpacity>
            <TouchableOpacity
        style ={styles.button}
        onPress={() => {navigation.replace("Home");}}
        >
          <Text style={[styles.button, styles.buttonText]}>Back to home</Text>
      </TouchableOpacity>
            
        </View>
    </KeyboardAvoidingView>
  )
}

export default UpdateRideScreen

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