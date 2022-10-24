import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CartProduct } from '../components/index.js'
import { AuthContext } from "../context/AuthContext.js";
const { width } = Dimensions.get('screen');
const axios = require('axios').default;

function Cart(navigation, route) {
    const [data, setData] = useState([])
    const {token} = useContext(AuthContext)

    useEffect(()=>{
        axios.get('http://10.0.2.2:8000/api/cart/',
            {
                headers: {
                    Authorization: "Bearer " + token.access
                }
            }
        )
        .then(function (response) {
            // handle success
            setData(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
                           data.map((item, index)=>{
                            return <CartProduct key={index} image={item.image} name={item.name} price={item.price} onPress={() => navigation.navigate('Product', {itemId: item.id, titleCate: item.name})} />
                        })
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