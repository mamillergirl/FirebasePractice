import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../firebase'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { getAuth, getUser} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const DisplayRideScreen = () => {
    
    const  [rides, setRides] = useState([])
    const [documentId, setDocumentId] = useState([])
    const navigation = useNavigation()
    const auth = getAuth()

    // const getUserEmail = () => {
        
        
    // }
   
    const getRides = async() => {
        const querySnapshot = await getDocs(collection(db, "rides"));
        const documents = querySnapshot.forEach((doc) => {
            documents.push({
              id: doc.id,
              ...doc.data(),
            });
        });
        // setDocs(documents);
        // querySnapshot.forEach((doc) => {
           
        //     console.log(`${doc.id} => ${doc.data().startingPoint}`);
        //     setRides([...rides, doc.data()]);
        
        // });
        setRides(documents);

    }
    const unsubscribe = getDocs(collection(db, "rides"))
          .then((querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
              documents.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setRides(documents);
          })
          .catch((error) => {
            console.log('Error getting documents: ', error);
          });
    useEffect(() => {
        
        return () => unsubscribe();
      }, []);
    
      
      const handleDeleteData = async (key) => {
          setDocumentId(key)
          const documentRef = doc(db, 'rides', documentId);
      
          await deleteDoc(documentRef);
          
        }
      
  
          
  
   

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.rideContainer}>
        <View>
            {rides.map((doc) => (
             <View style={styles.rideBox} key={doc.id}>
            <View >
                <Text style={styles.title}>Route</Text>
                <Text>{doc.startingPoint} - {doc.destination}</Text>
                </View>
            <View >
                <Text style={styles.title}>Time</Text>
                <Text>{doc.time}</Text>
                </View>
                <TouchableOpacity
              onPress={() => handleDeleteData(doc.id)}
               >
                 <Text style={[styles.button, styles.buttonText]}>Delete Ride</Text>
                </TouchableOpacity>
            </View>
          ))}
        </View>
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

export default DisplayRideScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }, 
    
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5,

    }, 
    rideContainer : {
        width: '90%',

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

    },
    rideBox : {
    width: '95%',
    height: '25%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: 'blue',
    borderStyle: 'solid', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 , shadowOpacity: 0.8, elevation: 2 },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    }
    


    
})