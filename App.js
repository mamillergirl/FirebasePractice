import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import AddRideScreen from './screens/AddRideScreen';
import DisplayRideScreen from './screens/DisplayRideScreen'
import UpdateRideScreen from './screens/UpdateRideScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddRide" component={AddRideScreen} />
        <Stack.Screen name="DisplayRide" component={DisplayRideScreen} />
        <Stack.Screen name="UpdateRide" component={UpdateRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
