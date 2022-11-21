import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryDetails } from '../components/index.js'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext.js";
import Spinner from 'react-native-loading-spinner-overlay';

function Repassword({navigation}){
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={25} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: fonts.h2, fontWeight: '400', color: 'black' }}>Đổi mật khẩu</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={{ alignSelf: 'center', width: '100%', top: 0, justifyContent: 'space-between', flexDirection: 'column' }}>
                        <SafeAreaView>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={setPassword}
                                value={password}
                                placeholder="Nhập mật khẩu mới.."
                            />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={setRePassword}
                                value={rePassword}
                                placeholder="Nhập lại mật khẩu..."
                            />
                            <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20, borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, paddingVertical: 10, borderColor: colors.primary, backgroundColor: colors.primary }}>
                                <Text style={{fontSize: fonts.h5, color: 'white', alignSelf: 'center'}}>THAY ĐỔI MẬT KHẨU</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
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
    input: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 0,
        borderColor: 'white',
        borderBottomColor: colors.inactive,
        marginHorizontal: 20,
        fontSize: 15
      },
})

export default Repassword