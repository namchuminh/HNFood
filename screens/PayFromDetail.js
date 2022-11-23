import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CartProduct } from '../components/index.js'
import { AuthContext } from "../context/AuthContext.js";
import { useIsFocused } from '@react-navigation/native'
import {PayProduct} from "../components/index.js";
const { width } = Dimensions.get('screen');
const axios = require('axios').default;

function PayFromDetail({navigation, route }) {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const isFocused = useIsFocused()
    const {token} = useContext(AuthContext)
    const {itemId} = route.params
    

    useEffect(()=>{
        axios.get('http://10.0.2.2:8000/api/food/'+itemId+'/',{
            headers: {
                Authorization: "Bearer " + token.access,
            }
        })
        .then(function (response) {
            // handle success
            setData(response.data)
            var total = 0
            response.data.map((item, index) => {
                total = item.price
            })
            setTotal(total)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

        
    }, [isLoading,isFocused])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                    <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={25} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: fonts.h2, fontWeight: '400', color: 'black' }}>Thanh Toán</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={styles.listProduct}>
                        {data.map((item, index) => <PayProduct key={index} number={item.number} name={item.name} image={item.image} price={item.price} />)}
                    </View>
                    <View style={{marginTop: 15, marginHorizontal: 15, borderBottomColor: colors.inactive, borderBottomWidth: 1, paddingBottom: 15}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: 'gray'}}>Tạm tính: </Text>
                            <Text style={{fontSize: 13, color: 'gray'}}>{total}.000đ</Text>
                        </View>
                        <View style={{paddingVertical: 5}} />
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: 'gray'}}>Phí giao hàng: </Text>
                            <Text style={{fontSize: 13, color: 'gray'}}>Miễn phí</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 15, marginHorizontal: 15, paddingBottom: 15}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: 'black'}}>Tổng tiền: </Text>
                            <Text style={{fontSize: 13, color: 'black'}}>{total}.000đ</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{backgroundColor: colors.primary, justifyContent: 'center', paddingVertical: 10, marginHorizontal: 10, borderRadius: 5}}>
                        <Text style={{alignSelf: 'center', color: 'white'}}>Giao Hàng</Text>
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
        flex: 70,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    listProduct: {
        borderColor: colors.inactive,
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 5,
        paddingVertical: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 1.1,
    },
})

export default PayFromDetail