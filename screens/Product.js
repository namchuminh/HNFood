import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryDetailsProduct } from '../components/index.js'
const { width } = Dimensions.get('screen');




const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb245',
        title: 'Nước ép cam',
        price: 15000,
        image: images.nuoccam,
    },
];


function Product(props) {


    const renderItem = ({ item }) => {
        return (
            <CategoryDetailsProduct image={item.image} title={item.title} price={item.price} />
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
                        <TouchableOpacity style={{ paddingRight: 20 }}>
                            <Ionicons name="arrow-back-outline" size={25} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: fonts.h2, fontWeight: '400', color: 'black' }}>Nước giải khát</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity>
                            <Ionicons name="notifications" size={22} style={{ paddingEnd: 5, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="ios-cart" size={22} style={{ paddingStart: 5, }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'row', paddingStart: 20, borderRadius: 30, borderWidth: 1, borderColor: colors.inactive, marginBottom: 10 }}>
                            <Ionicons name='search-outline' size={18} style={{ alignSelf: 'center', }} />
                            <TextInput style={{ borderRadius: 30, paddingStart: 5, fontSize: fonts.h4, fontWeight: '400', width: '100%', height: 50, }} placeholder='Tìm kiếm' />
                        </View>
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={{ alignSelf: 'center', width: '100%', top: 0, justifyContent: 'space-between', flexDirection: 'column' }}>
                        {
                            DATA.map((item) => <CategoryDetailsProduct key={item.id} image={item.image} title={item.title} price={item.price} />)
                        }
                    </View>

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
        flex: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 30
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
        marginBottom: 100

    }
})

export default Product

