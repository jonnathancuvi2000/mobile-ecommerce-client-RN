import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CartScreen({ item }) {
    return (
        <View style={styles.card}>
            <Image style={{ height: 80, width: 80 }} source={item.image} />
            <View style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 10,
                flex: 1
            }}
            >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 13, color: '#908e8c' }}>{item.ingredients}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$ {item.price}</Text>
            </View>
            <View style={{ marginRight: 2, alignItems: 'center'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>3</Text>
                <View style={styles.actionBtn}>
                    <Icon name='remove' size={25} color={'white'}/>
                    <Icon name='add' size={25} color={'white'}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        paddingVertical: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        // height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionBtn: {
        backgroundColor: '#F9813A',
        width: 80,
        height: 30,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});