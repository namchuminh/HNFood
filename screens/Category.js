import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryProduct } from '../components/index.js'
const { width } = Dimensions.get('screen');




const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Sữa chua mít',
        price: 25000,
        image: images.suachua,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        title: 'Kẹo mút',
        price: 2000,
        image: images.keo,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        title: 'Pizza',
        price: 149000,
        image: images.pizza,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
        title: 'Sô cô la',
        price: 39000,
        image: images.chocolate,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bt',
        title: 'Kem',
        price: 10000,
        image: images.kem,
    },
    {
        id: 'bd7acbea-c1b1-42g2-aed5-3ad53abb28bc',
        title: 'Bánh mochi',
        price: 169000,
        image: images.mochi,
    },
];


function Home(props) {


    const renderItem = ({ item }) => {
        return (
            <CategoryProduct image={item.image} title={item.title} price={item.price}/>
        )

    };
    const handleScroll = (event) => {
        Keyboard.dismiss()
    }

    return (

        <View style={styles.container}>
            <TopSearch title={'Chuyên mục'} />
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} onScroll={(event) => handleScroll(event)}>
                <View style={styles.mid}>
                    <View style={{ alignSelf: 'center', width: '100%', top: 0, justifyContent: 'space-between', flexDirection: 'column' }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            style={{ marginBottom: 100 }}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </View></ScrollView>
        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default Home

