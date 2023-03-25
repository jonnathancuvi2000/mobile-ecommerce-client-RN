import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

export default function Card({ food, navigation }) {
    return (
        <TouchableOpacity underlayColor = {'white'} activeOpacity={0.9}  onPress={() => navigation.navigate('DetailScreen', food)}>
            <View style={styles.card}>
                <View style={{ alignItems: 'center', top: -40 }}>
                    {/* this was no before -> borderRadius: 100,  borderWidth: 1, borderColor: "#F9813A"  */}
                    <Image
                        source={food.image}
                        style={{ height: 120, width: 120, resizeMode: 'cover', borderRadius: 100,  borderWidth: 1, borderColor: "#F9813A"  }}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{food.name}</Text>
                    <Text style={{ fontSize: 14, marginTop: 2, color: '#908e8c' }}>{food.ingredients}</Text>
                </View>
                <View style={{
                    marginTop: 10,
                    marginHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor:  'red',
                    marginBottom: 10
                }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.price}</Text>
                    <View style={styles.addToCard}>
                        <Text>
                            <Icon name="add" size={20} color={'white'} />
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        // maxHeight: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: 'white',
    },
    addToCard: {
        backgroundColor: '#F9813A',
        height: 30,
        width: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
