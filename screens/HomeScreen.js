import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const auth = getAuth();
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {navigation.replace("Login")})
      .catch(error => alert(error.message))
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        style ={styles.button}
        onPress = {handleSignOut}
        >
          <Text style={[styles.button, styles.buttonText]}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style ={styles.button}
        onPress={() => {navigation.replace("AddRide");}}
        >
          <Text style={[styles.button, styles.buttonText]}>Add Ride</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style ={styles.button}
        onPress={() => {navigation.replace("DisplayRide");}}
        >
          <Text style={[styles.button, styles.buttonText]}>View Rides</Text>
      </TouchableOpacity> */}
                
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  }, 
  buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
  button : {
      backgroundColor: '#0702F9',
      width: '50%',
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
  text : {
    padding: 10,
  }
  
})