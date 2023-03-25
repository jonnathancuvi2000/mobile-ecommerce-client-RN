import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardCart from '../components/CardCart'
import foods from '../consts/foods'
import {PrimaryButton} from '../components/Button'

export default function CartScreen({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={20} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Carrito</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={foods}
        renderItem={({ item }) =>
          <CardCart item={item} />}

        ListFooterComponent={() => (
          <View>
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>

          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
});