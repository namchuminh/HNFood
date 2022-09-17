import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {fonts, colors, images} from '../constants/index.js'

function Login(props){
    return(
        <ScrollView style={styles.container}>
            <View  style={styles.top}>
                <Image source={images.logo_food} style={{width: 100, height: 100, alignSelf: 'center'}} resizeMode={'contain'} />
                <View style={{paddingBottom: 30}} />
                <View style={{alignSelf: 'flex-end', paddingBottom: 30}}>
                    <Text style={{fontWeight: '600', fontSize: fonts.h3, color: 'white'}}><Icon name='login' size={17}/> Đăng Nhập</Text>
                </View>
            </View>
            <View  style={styles.mid}>
                <View style={styles.searchSection}>
                    <FontAwesome name='user' size={18} color={'#9c9c9c'} style={{paddingStart: 15}}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Tài khoản"
                    />
                </View>
                <View style={styles.searchSection}>
                    <Icon name='key' size={18} color={'#9c9c9c'} style={{paddingStart: 15}}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{marginTop: 20, alignSelf: 'flex-end'}}>
                    <Text style={{ color: '#9c9c9c', fontSize: fonts.h5, fontWeight: '400'}}>Quên mật khẩu ?</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View>
                    <TouchableOpacity style={{backgroundColor: colors.primary, height: 50, borderRadius: 35, justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: fonts.h2, fontWeight: 'bold', alignSelf: 'center'}}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}} />
                <View style={{alignSelf: 'center', paddingVertical: 80}}>
                    <View style={{flex: 1}} />
                    <Text style={{color: '#9c9c9c', fontSize: fonts.h5, fontWeight: '400'}}>Bạn chưa có tài khoản? <Text style={{color: colors.primary, fontWeight: 'bold'}}>Đăng ký ngay!</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    top: {
        height: '30%',
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 100,
        paddingHorizontal: 20,
        justifyContent: 'center',
    }, 
    mid: {
        height: '30%',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 40,
    },
    bottom: {
        height: '40%',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 40,
        paddingVertical: 40,
    },
    searchSection: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#9c9c9c',
    },
})

export default Login
  
