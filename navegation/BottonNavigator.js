import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnBoardScreen from '../view/OnBoardScreen'
import Home from '../view/Home'
import CartScreen from '../view/CartScreen'
import DetailScreen from '../view/DetailScreen'
import { View, StyleSheet } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottonNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                showLabel: false,
                activeTintColor: '#F9813A',
                
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" color={color} size={28} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="LocalMall"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="local-mall" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.search} >
                            <Icon name="search" color='#F9813A' size={28} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="favorite" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-cart" color={color} size={28} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    search: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#F9813A',
        borderWidth: 2,
        borderRadius: 30,
        top: -25,
        elevation: 5,
    },
});


export default BottonNavigator;
