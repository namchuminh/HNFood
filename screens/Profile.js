import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryDetails } from '../components/index.js'
const { width } = Dimensions.get('screen');


function Profile(props) {

    const handleScroll = (event) => {
        Keyboard.dismiss()
    }

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} onScroll={(event) => handleScroll(event)}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '8%', marginHorizontal: 10 }}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-back-outline" size={30} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Thông tin cá nhân</Text>
                        <TouchableOpacity>
                            <Ionicons name="cart-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10, paddingVertical: 5 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '8%', marginHorizontal: 10 }}>
                        <Image source={images.avatar} style={{ width: 80, height: 80, borderRadius: 40 }} />
                        <View>
                            <Text style={{ fontSize: 20, paddingHorizontal: 20, paddingTop: 25 }}>Nam Ngu Óc</Text>
                            <Text style={{ fontSize: 14, paddingHorizontal: 20, color: 'grey' }}>namngu@gmail.com</Text>
                        </View>

                    </View>
                    <View style={{ borderBottomColor: '#F6F7FC', borderBottomWidth: 20, paddingVertical: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '8%', marginHorizontal: 10 }}>
                        <TouchableOpacity>
                            <Ionicons name="receipt-outline" size={30} style={{ paddingHorizontal: 30, color: colors.primary }} />
                            <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>Đơn hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="cart-outline" size={30} style={{ paddingHorizontal: 30, color: colors.primary }} />
                            <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>Giỏ hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="location-outline" size={30} style={{ paddingHorizontal: 30, color: colors.primary }} />
                            <Text style={{ paddingHorizontal: 30, fontSize: 16 }}>Vị trí</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: '#F6F7FC', borderBottomWidth: 20, paddingVertical: 20 }} />
                </View>
                <View style={styles.mid}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 10 }}>
                        <View>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16, color: 'grey' }}>Họ tên</Text>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>Nam Ngu Óc</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='pencil' size={20} color={'grey'} style={{ paddingVertical: 10, paddingRight: 20 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 10 }}>
                        <View>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16, color: 'grey' }}>Số điện thoại</Text>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>0123456789</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='pencil' size={20} color={'grey'} style={{ paddingVertical: 10, paddingRight: 20 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 10 }}>
                        <View>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16, color: 'grey' }}>Địa chỉ Email</Text>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>namngu@gmail</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='pencil' size={20} color={'grey'} style={{ paddingVertical: 10, paddingRight: 20 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
                    <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={{ paddingHorizontal: 15, fontSize: 16, color: 'grey' }}>Số dư</Text>
                        <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>36.327.103đ</Text>
                    </View>
                    <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 10 }}>
                        <View>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16, color: 'grey' }}>Địa chỉ</Text>
                            <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>Xuân Đỉnh, Bắc Từ Liêm, Hà Nội</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='pencil' size={20} color={'grey'} style={{ paddingVertical: 10, paddingRight: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 10, backgroundColor: '#F6F7FC', height: 60 }}>
                        <Text style={{ paddingHorizontal: 10, color: 'grey' }}>Những thông tin trên chỉ hiển thị cho riêng bạn và không được chia sẻ cho bất cứ ai khác</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={{ paddingHorizontal: 15, fontSize: 16, color: 'grey', paddingVertical: 10 }}>Đổi mật khẩu</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward-outline" size={30} style={{ paddingHorizontal: 10, paddingTop: 5, color: 'grey' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: '#F6F7FC', borderBottomWidth: 10 }} />
                    <TouchableOpacity style={{backgroundColor: 'white', paddingVertical: 10}}>
                        <Text style={{ paddingHorizontal: 15, fontSize: 18, color: 'black', paddingVertical: 10, alignSelf: 'center' }}>Đăng xuất</Text>
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
})

export default Profile

