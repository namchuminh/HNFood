import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard, Picker } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryDetails } from '../components/index.js'
const { width } = Dimensions.get('screen');


function Password(props) {

    const handleScroll = (event) => {
        Keyboard.dismiss()
    }

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} onScroll={(event) => handleScroll(event)}>
                <View style={styles.top}>
                    <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10}}>
                        <Ionicons name="arrow-back-outline" size={30} />
                    </TouchableOpacity>
                    <Image source={images.logo_food} style={{width: 150, height: 150, alignSelf: 'center', marginVertical: 40}}/>
                    <Text style={{fontSize: 35, alignSelf: 'center', paddingVertical: 10}}>Đổi mật khẩu</Text>
                    <Text style={{fontSize: 18, alignSelf: 'center', color: 'grey', paddingBottom: 40}}>Vui lòng nhập mật khẩu mới</Text>
                    <Text style={{paddingHorizontal: 20, fontSize: 18, color: colors.primary}}>Mật khẩu mới</Text>
                    
                </View>
                <View style={styles.mid}>
                    
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

export default Password

