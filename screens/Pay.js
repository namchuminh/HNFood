import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors } from '../constants/index.js'
import { AuthContext } from "../context/AuthContext.js";
import { useIsFocused } from '@react-navigation/native'
import { PayProduct } from "../components/index.js";
const { width } = Dimensions.get('screen');
const axios = require('axios').default;

function Pay({ navigation }) {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const isFocused = useIsFocused()
    const { token } = useContext(AuthContext)

    const orderProduct = async () => {
        for (var i = 0; i < data.length; i++) {
            axios.post('https://namchuminh.pythonanywhere.com/api/order/',
                {
                    product: data[i].product,
                    number: data[i].number,
                    user: 1
                },
                {
                    headers: {
                        Authorization: "Bearer " + token.access,
                    }
                })
        }
        await navigation.navigate('Order')
    }

    useEffect(() => {
        axios.get('https://namchuminh.pythonanywhere.com/api/cart/', {
            headers: {
                Authorization: "Bearer " + token.access,
            }
        })
            .then(function (response) {
                // handle success
                setData(response.data)
                var total = 0
                response.data.map((item, index) => {
                    total += parseInt(item.price * item.number)
                })
                setTotal(total)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }, [isLoading, isFocused])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={25} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: fonts.h2, fontWeight: '400', color: 'black' }}>Thanh To??n</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>
                {
                    data.length == 0 || data == undefined ?
                        <>
                            <View style={{ justifyContent: 'center' }}>
                                <Ionicons name="list-outline" size={150} color={'#f1f1f1'} style={{ alignSelf: 'center' }} />
                                <View style={{ paddingVertical: 15 }} />
                                <Text style={{ alignSelf: 'center', color: 'gray' }}>B???n ???? thanh to??n h???t ????n h??ng!</Text>
                            </View>
                        </>
                        :
                        <>
                            <View style={styles.mid}>
                                <View style={styles.listProduct}>
                                    {data.map((item, index) => <PayProduct key={index} number={item.number} name={item.name} image={item.image} price={item.price} />)}
                                </View>
                                <View style={{ marginTop: 15, marginHorizontal: 15, borderBottomColor: colors.inactive, borderBottomWidth: 1, paddingBottom: 15 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 13, color: 'gray' }}>T???m t??nh: </Text>
                                        <Text style={{ fontSize: 13, color: 'gray' }}>{total}.000??</Text>
                                    </View>
                                    <View style={{ paddingVertical: 5 }} />
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 13, color: 'gray' }}>Ph?? giao h??ng: </Text>
                                        <Text style={{ fontSize: 13, color: 'gray' }}>Mi???n ph??</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 15, marginHorizontal: 15, paddingBottom: 15 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 13, color: 'black' }}>T???ng ti???n: </Text>
                                        <Text style={{ fontSize: 13, color: 'black' }}>{total}.000??</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => orderProduct()} style={{ backgroundColor: colors.primary, justifyContent: 'center', paddingVertical: 10, marginHorizontal: 10, borderRadius: 5 }}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>Giao H??ng</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }
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
        borderRadius: 0,
        paddingVertical: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 1.1,
    },
})

export default Pay