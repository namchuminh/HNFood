import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, colors, images } from '../constants/index.js'
import { TopSearch, CategoryHome } from '../components/index.js'
import { useEffect, useState } from 'react'
const { width } = Dimensions.get('screen');
const axios = require('axios').default;

function Home(props) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://10.0.2.2:8000/api/food/')
        .then(function (response) {
            // handle success
            setData(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [])


    const renderItemDoAnNhanh = ({ item }) => item.category == 1 ? <CategoryHome image={item.image} name={item.name} /> : null
  

    const renderItemDoAnCom = ({ item }) => {
        if(item.category == 3){
            return (
                <CategoryHome image={item.image} name={item.name} />
            )
        } 
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <Text style={{ fontSize: fonts.h2, fontWeight: '400', color: 'black' }}>Trang Chủ</Text>
                        <View style={{flex: 1}}/>                            
                        <Ionicons name="notifications" size={22} style={{ paddingEnd: 5, }} />
                        <Ionicons name="ios-cart" size={22} style={{ paddingStart: 5, }} />
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{ backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'row', paddingStart: 20, borderRadius: 30, borderWidth: 1, borderColor: colors.inactive, marginBottom: 10}}>
                            <Ionicons name='search-outline' size={18} style={{ alignSelf: 'center', }} />
                            <TextInput style={{ borderRadius: 30, paddingStart: 5, fontSize: fonts.h4, fontWeight: '400', width: '100%', height: 50, }} placeholder='Tìm kiếm' />
                        </View>
                    </View>
                </View>
                <View style={styles.mid}>
                    <Image source={images.banner} style={{ width: '100%', height: 200, borderRadius: 10 }} />
                    <View>
                        <Text style={{ fontSize: 20, top: 10 }}> Đồ ăn nhanh</Text>
                        <View style={{ alignSelf: 'center', width: '100%', paddingTop: 30, justifyContent: 'space-between', flexDirection: 'row', }}>
                            <FlatList
                                data={data}
                                renderItem={renderItemDoAnNhanh}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <Text style={{ fontSize: 20, top: 10 }}> Đồ ăn cơm</Text>
                        <View style={{ alignSelf: 'center', width: '100%', paddingTop: 30, justifyContent: 'space-between', flexDirection: 'row', }}>
                            <FlatList
                                data={data}
                                renderItem={renderItemDoAnCom}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mid: {
        flex: 70,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 50
    },
    top: {
        flex: 30,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
    }, 
})

export default Home

