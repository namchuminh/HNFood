import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryDetails, CategoryHome } from '../components/index.js'
import { useIsFocused } from '@react-navigation/native'
import { AuthContext } from "../context/AuthContext.js";
const { width } = Dimensions.get('screen');
const axios = require('axios').default;

function Details({ navigation, route }) {
    const [data, setData] = useState({})
    const [dataRelated, setDataRelated] = useState([])
    const { itemId } = route.params
    const isFocused = useIsFocused()
    const {token} = useContext(AuthContext)
    
    dataRelated.sort(function(){
        return 0.5 - Math.random()
    })  
    dataRelated.length = 4
    
    const getDetailsData = (itemId) => {
        axios.get('http://10.0.2.2:8000/api/food/'+itemId+'/')
        .then(function (response) {
            // handle success
            setData(response.data)

            //Sau khi có response lần đầu thì mới thực hiện tiếp việc call api
            axios.get('http://10.0.2.2:8000/api/food/category/'+response.data.category+'/')
            .then(function (response) {
                // handle success
                setDataRelated(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    const addProductToCart = (id) => {
        axios.post('http://10.0.2.2:8000/api/cart/',
        {
            product: id,
        },
        {
            headers: {
                Authorization: "Bearer " + token.access,
            }
        })
        .then(function (response) {
            alert("Đã thêm sản phẩm vào giỏ hàng!")
         })
         .catch(function (error) {
           console.log(error);
         });
    }

    const orderProduct = (id) => {
        axios.post('http://10.0.2.2:8000/api/order/',
        {
            product: id,
        },
        {
            headers: {
                Authorization: "Bearer " + token.access,
            }
        })
        .then(function (response) {
            alert("Đặt hàng thành công!")
         })
         .catch(function (error) {
           console.log(error);
         });
    }

    useEffect(()=>{
        getDetailsData(itemId)
        addProductToCart(id)
        orderProduct
    }, [isFocused])
    

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#F1F1F1', borderRadius: 5 }} onPress={()=> navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={22} style={{ paddingHorizontal: 5, paddingVertical: 5, color: colors.primary }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Chi tiết đồ ăn</Text>
                        <TouchableOpacity>
                            <Ionicons name="cart-outline" size={30} style={{ color: colors.primary }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mid}>
                    <ScrollView style={{ alignSelf: 'center', width: '100%',}} horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                            <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={{uri: "http://10.0.2.2:8000"+data.image1}} style={styles.cardImages}  />
                            </View>
                            <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{uri: "http://10.0.2.2:8000"+data.image2}} style={styles.cardImages} />
                            </View>
                            <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={{uri: "http://10.0.2.2:8000"+data.image3}} style={styles.cardImages} />
                            </View>
                    </ScrollView>
                </View>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'column', paddingHorizontal: 10, marginBottom: 20 }}>
                        <Text style={{ fontSize: 20, paddingTop: 10 }}>{data.name}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10}}>
                            <Text style={{ fontSize: 20,}}>{data.price}đ</Text>
                            <Text style={{ fontSize: 18, color: 'grey', textDecorationLine: 'line-through'}}>{data.price_sale}đ</Text>
                        </View>
                        
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingRight: 20 }}>
                        <Ionicons name="timer-outline" size={14} style={{ paddingHorizontal: 5, paddingVertical: 5 }}> 10 phút</Ionicons>
                        <Ionicons name="star-outline" size={14} style={{ paddingHorizontal: 5, paddingVertical: 5 }}> 4.5</Ionicons>
                        <Ionicons name="car-outline" size={14} style={{ paddingHorizontal: 5, paddingVertical: 5 }}> Miễn phí giao hàng</Ionicons>
                    </View>
                    <Text style={{ paddingHorizontal: 10, paddingVertical: 10, color: 'grey', lineHeight: 20 }}>{data.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 10 }}>
                        <Text style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 3, borderColor: '#FBF0D9', backgroundColor: '#FBF0D9', marginHorizontal: 10 }}>Trạng Thái: {data.isProduct ? "Còn Hàng" : "Hết Hàng"}</Text>
                    </View>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10, paddingVertical: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, marginHorizontal: 10 }}>
                        <Image source={{uri: "http://10.0.2.2:8000"+data.image }} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <Text style={{alignSelf: 'center', paddingStart: 2, lineHeight: 20, width: '25%'}}>{data.name}</Text>
                        <TouchableOpacity onPress={() => addProductToCart(itemId)}>
                            <Text style={{paddingVertical: 10, borderWidth: 1, paddingHorizontal: 10, marginTop: 10, borderRadius: 5 }}>+ Thêm giỏ hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
                    <View>
                        <Text style={{ fontSize: fonts.h3, marginBottom: 10, marginTop: 15 }}> Sản phẩm liên quan</Text>
                        <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                            {
                                dataRelated.map((item, index) => {
                                    return <CategoryHome key={index} image={item.image} name={item.name} price={item.price} onPress={() => getDetailsData(item.id)} />
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, paddingVertical: 20, borderColor: colors.primary, backgroundColor: colors.primary }} onPress={() => orderProduct(itemId)}>
                            <Text style={{fontSize: fonts.h4, color: 'white', alignSelf: 'center'}}>Đặt hàng</Text>
                        </TouchableOpacity>

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
        flex: 20,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    mid: {
        flex: 80,
        backgroundColor: 'white',
    },
    bottom: {
        paddingHorizontal: 10
    },
    cardImages: {
        height: 230,
        width: 300,
        borderRadius: 5,
        marginHorizontal: 10,
    }
})

export default Details