import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function CategiresDiplay({ category, index, setSelectedCategoryIndex, selectedCategoryIndex }) {
    return (
        <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
                style={{
                    backgroundColor:
                        selectedCategoryIndex == index
                            ? "#F9813A"
                            : "#fedac5",
                    ...styles.categoryBtn,
                }}>

                <View style={styles.categoryBtnImgCon}>
                    <Image
                        source={category.image}
                        style={{ height: 35, width: 35, resizeMode: 'cover' }}
                    />
                </View>

                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        color:
                            selectedCategoryIndex == index
                                ? "white"
                                : "#F9813A",
                    }}>
                    {category.name}
                </Text>

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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