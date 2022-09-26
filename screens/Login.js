import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {fonts, colors, images} from '../constants/index.js'

function Login({navigation}){
    const handleScroll = (event) => {
        Keyboard.dismiss()
    }
    return(
        <KeyboardAwareScrollView  onScroll={(event)=> handleScroll(event)} showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
                <View  style={styles.top}>
                    <View>
                        <Image source={images.logo_food} style={{width: 100, height: 100, alignSelf: 'center'}} resizeMode={'contain'} />
                    </View>
                    <TouchableOpacity style={{alignSelf: 'flex-end', paddingVertical: 25}}>
                        <Text style={{fontWeight: '600', fontSize: fonts.h3, color: 'white'}}><Icon name='login' size={17}/> Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
                
                <View  style={styles.mid}>
                    <View style={{paddingTop: 25}}>
                        <View style={styles.searchSection}>
                            <FontAwesome name='user' size={18} color={'#9c9c9c'} style={{paddingStart: 15}}/>
                            <TextInput
                                style={styles.input}
                                placeholder="Tài khoản"
                            />
                        </View>
                        <View style={{paddingTop: 25}}/>
                        <View style={styles.searchSection}>
                            <Icon name='key' size={18} color={'#9c9c9c'} style={{paddingStart: 15}}/>
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu"
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <View style={{paddingTop: 25, alignSelf: 'flex-end'}}>
                        <Text style={{ color: '#9c9c9c', fontSize: fonts.h5, fontWeight: '400'}}>Quên mật khẩu ?</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={{paddingTop: 25}}>
                        <TouchableOpacity style={{backgroundColor: colors.primary, height: 50, borderRadius: 35, justifyContent: 'center'}}>
                            <Text style={{color: 'white', fontSize: fonts.h2, fontWeight: 'bold', alignSelf: 'center'}}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop: 25}} />
                    <View style={{alignSelf: 'center', paddingBottom: 10}}>
                        <Text style={{color: '#9c9c9c', fontSize: fonts.h5, fontWeight: '400'}}>Bạn chưa có tài khoản? 
                            <Text style={{color: colors.primary, fontWeight: 'bold'}} onPress={() => navigation.navigate('Register') }> Đăng ký ngay!</Text>
                        </Text>
                    </View>
                </View>
        </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    top: {
        flex: 40,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 100,
        paddingHorizontal: 20,
        justifyContent: 'center',
    }, 
    mid: {
        flex: 40,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 40,
        justifyContent: 'center'
    },
    bottom: {
        flex: 20,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 40,
        
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
  
