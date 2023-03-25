import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SecondaryButton } from '../components/Button';

export default function DetailScreen({ navigation, route }) {
  const item = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detalles</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 230
        }}>
          <Image source={item.image} style={{ height: 210, width: 210 }} />
        </View>
        <View style={styles.detailes}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
            <View style={styles.iconContainer}>
              <Icon name="favorite-border" size={25} color={'#F9813A'} />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit temporibus amet aperiam exercitationem optio qui dignissimos minus repellat accusamus beatae non animi ipsum eligendi nisi est, cum dolores. Nemo, sapiente.
          </Text>
          <View style={{ marginBottom: 40}}>
            <SecondaryButton onPress={() => navigation.navigate('Home')} title='Agragar al Carrrito'/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  detailes: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: '#F9813A',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsText: {
    marginTop: 10, 
    fontSize: 16,
    color: 'white',
    lineHeight: 22
  }
});