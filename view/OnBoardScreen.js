import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/Button';
import COLORS from '../consts/colors';

export default function OnBoardScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: 350 }}>
        <Image style={{
          width: '100%',
          resizeMode: 'contain',
          top: -200,
          // backgroundColor: 'blue'

        }} source={require('../assets/onboardImage.png')} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={{
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center'
          }}>Comida Delisiosa</Text>
          <Text style={{
            marginTop: 20,
            fontSize: 18,
            textAlign: 'center',
            color: '#908e8c'
          }}>Te ayudamos a econtrar la mejor comida</Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator}/>
          <View style={styles.indicator}/>
          <View style={styles.indicator}/>
        </View>
        <PrimaryButton onPress={() => navigation.navigate('Home')} title='Comenzar'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40, // here was 40
    // backgroundColor: 'red'
  },
  indicatorContainer: {
    // backgroundColor: '#000',
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentIndicator: {
    backgroundColor: "#F9813A",
    height: 12,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#908e8c",
    marginHorizontal: 5
  }
});




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function OnBoardScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>OObboard screennn</Text>
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