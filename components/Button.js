import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const PrimaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.btnContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const SecondaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...styles.btnContainer, backgroundColor: 'white', marginTop: 20 }}>
                <Text style={{ ...styles.title, color: '#F9813A' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#F9813A',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export { PrimaryButton, SecondaryButton };