import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Screen1/>
    <Screen2/>

  // <NavigationContainer>
  //   <Stack.Navigator >
  //     <Stack.Screen name='Screen1' component={Screen1} />
  //     <Stack.Screen name='Screen2' component={Screen2} />
  //   </Stack.Navigator>
  // </NavigationContainer>
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
