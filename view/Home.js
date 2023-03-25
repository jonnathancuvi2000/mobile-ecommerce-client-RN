
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategiresDiplay from '../components/CategiresDiplay';
import categories from '../consts/categories'
import food from '../consts/foods'
import Card from '../components/Card'

export default function Home({ navigation }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer} s>
        {categories.map((category, index) => (
          <CategiresDiplay category={category} index={index} setSelectedCategoryIndex={setSelectedCategoryIndex} selectedCategoryIndex={selectedCategoryIndex} />
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hola,</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
              Jonnathan
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: '#908e8c' }}>
            Muebles JC
          </Text>
        </View>
        <Image
          source={require('../assets/pers.png')}
          style={{ height: 50, width: 50, borderRadius: 25, }}
        />
      </View>
      <View style={styles.conatinerInputIcon}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput style={{ fontSize: 18, flex: 1 }} placeholder='Busqueda de Comida' />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={'white'} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={food}
        renderItem={({ item }) =>
          <Card food={item} navigation={navigation} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // backgroundColor: 'red'
  },
  conatinerInputIcon: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // backgroundColor: 'coral'
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  sortBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#F9813A',
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoriesListContainer: {
    // backgroundColor: 'red',
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'
  }
});