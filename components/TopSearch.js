import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {fonts, colors, images} from '../constants/index.js'

function TopSearch(props){
    return (
        <View>
            <View  style={styles.top}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: '8%'}}>
                    <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>{props.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="notifications" size ={22} style={{paddingEnd: 5,}}/>
                        <Ionicons name="ios-cart" size ={22} style={{paddingStart: 5,}}/>
                    </View>
                </View>
            </View>
            <View  style={styles.search}>
                <View style={{backgroundColor: 'white', justifyContent: 'flex-start', top: -25, flexDirection: 'row', paddingStart: 20, borderRadius: 30, borderWidth: 1, borderColor: colors.inactive, elevation: 15,}}>
                    <Ionicons name='search-outline' size={18} style={{alignSelf: 'center',}} />
                    <TextInput style={{borderRadius: 30, paddingStart: 5, fontSize: fonts.h4, fontWeight: '400', width: '100%', height: 50, }} placeholder='Tìm kiếm'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        height: 100,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
    }, 
    search:{
        height: '10%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginBottom: -20
    },
})

export default TopSearch