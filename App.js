import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardScreen from './view/OnBoardScreen'
// import Home from './view/Home'
import CartScreen from './view/CartScreen'
import DetailScreen from './view/DetailScreen'

import BottonNavigator from './navegation/BottonNavigator'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown:   false }}>
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreen}></Stack.Screen>
        <Stack.Screen name='Home' component={BottonNavigator}></Stack.Screen>
        {/* <Stack.Screen name='CartScreen' component={CartScreen}></Stack.Screen> */}
        <Stack.Screen name='DetailScreen' component={DetailScreen}></Stack.Screen>
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


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
