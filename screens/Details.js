import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryDetails } from '../components/index.js'
const { width } = Dimensions.get('screen');

const DATA = [
    {
        id: '1',
        image: images.noodles,
    },
    {
        id: '2',
        image: images.noodles2,
    },
    {
        id: '3',
        image: images.noodles3,
    }
];

function Details(props) {

    const renderItem = ({ item }) => {
        return (
            <CategoryDetails image={item.image} title={item.title} price={item.price} />
        )

    };

    const handleScroll = (event) => {
        Keyboard.dismiss()
    }

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, marginHorizontal: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#F1F1F1', borderRadius: 5 }}>
                            <Ionicons name="arrow-back-outline" size={22} style={{ paddingHorizontal: 5, paddingVertical: 5, color: colors.primary }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Chi tiết món ăn</Text>
                        <TouchableOpacity>
                            <Ionicons name="cart-outline" size={30} style={{ color: colors.primary }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={{ alignSelf: 'center', width: '100%', justifyContent: 'space-between'}}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            style={{ marginBottom: 30 }}
                            horizontal
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 20 }}>
                        <Text style={{ fontSize: 24 }}>Mỳ Quảng</Text>
                        <Text style={{ fontSize: 24, marginRight: 20 }}>50.000đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, paddingRight: 20 }}>
                        <Ionicons name="timer-outline" size={14} style={{ paddingHorizontal: 5, paddingVertical: 5 }}> 10 phút</Ionicons>
                        <Ionicons name="star-outline" size={14} style={{ paddingHorizontal: 5, paddingVertical: 5 }}> 4.5</Ionicons>
                        <Ionicons name="car-outline" size={14} style={{ paddingHorizontal: 5, paddingVertical: 5 }}> Miễn phí giao hàng</Ionicons>
                    </View>
                    <Text style={{ paddingHorizontal: 10, paddingVertical: 10, color: 'grey' }}>Mỳ Quảng là một món ăn đặc sản đặc trưng của Quảng Nam và Đà Nẵng, Việt Nam. Mỳ Quảng thường được làm từ bột gạo xay mịn với nước từ hạt dành dành và trứng cho có màu vàng và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mỳ mỏng khoảng 5 -10mm.</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 3, borderColor: '#FBF0D9', backgroundColor: '#FBF0D9', marginHorizontal: 10 }}>Mỳ</Text>
                        <Text style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 3, borderColor: '#FBF0D9', backgroundColor: '#FBF0D9', marginHorizontal: 10 }}>Mỳ Quảng</Text>
                        <Text style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 3, borderColor: '#FBF0D9', backgroundColor: '#FBF0D9', marginHorizontal: 10 }}>Quảng Nam</Text>
                    </View>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10, paddingVertical: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 20 }}>
                        
                        <View style={{ justifyContent: 'center', paddingTop: 5, flexDirection: 'row' }}>
                            <Image source={images.noodles} style={{ width: 50, height: 50, borderRadius: 10 }} />
                            <Text style={{alignSelf: 'center', paddingStart: 20}}>Mỳ Quảng</Text>

                        </View>
                        <TouchableOpacity>
                            <Text style={{ paddingVertical: 10, borderWidth: 1, paddingHorizontal: 10, marginTop: 10, borderRadius: 5 }}>+ Thêm giỏ hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
                    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, paddingVertical: 20, borderColor: colors.primary, backgroundColor: colors.primary }}>
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
    }
})

export default Details

