import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CartProduct } from '../components/index.js'
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


function Cart(props) {


    const renderItem = ({ item }) => {
        return (
            <CartProduct image={item.image} title={item.title} price={item.price} />
        )

    };
    const handleScroll = (event) => {
        Keyboard.dismiss()
    }

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} onScroll={(event) => handleScroll(event)}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <Text style={{ fontSize: fonts.h2, fontWeight: '400', color: 'black' }}>Giỏ hàng</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity>
                            <Ionicons name="notifications" size={22} style={{ paddingEnd: 5, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="ios-cart" size={22} style={{ paddingStart: 5, }} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={{ alignSelf: 'center', width: '100%', top: 0, justifyContent: 'space-between', flexDirection: 'column' }}>
                        { 
                            DATA.map((item) => <CartProduct key={item.id} image={item.image} title={item.title} price={item.price} />) 
                        }
                    </View>

                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>

                        <Text style={styles.order}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        flex: 30,
        backgroundColor: colors.primary,
        paddingHorizontal: 20
    },
    mid: {
        flex: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 30
    },
    bottom: {
        flex: 10
    },
    order: {
        flex: 1,
        borderWidth: 1,
        color: 'white',
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginBottom: 20

    }
})

export default Cart

