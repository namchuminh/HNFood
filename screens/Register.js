import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {fonts, colors, images} from '../constants/index.js'

function Register(props){
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View  style={styles.top}>
                <TouchableOpacity>
                    <Icon name='arrow-left'  size={27}  style={{paddingTop: 15}}/>
                </TouchableOpacity>
                <View style={{flex: 1}}/>
                <View style={{justifyContent: 'center', paddingBottom: 30}}>
                    <Image  source={images.logo_sigup} style={{width: 160, height: 160, alignSelf: 'center'}} resizeMode={'contain'} />
                </View>
                
            </View>
            <View  style={styles.mid}>
                
                <View>
                    <Text style={{color: 'black', fontSize: fonts.h1, fontWeight: 'bold', alignSelf: 'center', paddingVertical: 25}}>Tạo Tài Khoản Mới</Text>
                </View>
                    <View style={styles.searchSection}>
                        <Octicons name='pencil' size={18} color={'black'} style={{paddingStart: 15}}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập họ tên"
                        />
                    </View>
                    <View style={styles.searchSection}>
                        <FontAwesome name='user' size={18} color={'black'} style={{paddingStart: 15}}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập tài khoản"
                        />
                    </View>
                    <View style={styles.searchSection}>
                        <FontAwesome name='key' size={18} color={'black'} style={{paddingStart: 15}}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập mật khẩu"
                        />
                    </View>
                    <View style={styles.searchSection}>
                        <FontAwesome name='phone' size={18} color={'black'} style={{paddingStart: 15}}/>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập số điện thoại"
                        />
                    </View>
                
            </View>
            <View style={styles.bottom}>
                <View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Text style={{alignSelf: 'center', marginEnd: 10, fontSize: fonts.h1, fontWeight: 'bold', color: 'black'}}>Đăng Ký</Text>
                        <TouchableOpacity style={{alignSelf: 'flex-end', backgroundColor: 'black', width: 70, height: 50, borderRadius: 50, justifyContent: 'center'}}>
                            <Icon name='arrow-right' style={{textAlign: 'center', alignSelf: 'center' }} size={30} color={'#f2f2f2'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingVertical: 30}}>
                        <Text style={{textAlign: 'center', fontWeight: '500',}}>Bạn đã có tài khoản? <Text style={{fontWeight: 'bold'}}>Đăng nhập ngay!</Text> </Text>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    top: {
        flex: 30,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    }, 
    mid: {
        flex: 50,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20
    },
    bottom: {
        flex: 20,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
    },
    searchSection: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30, 
        marginBottom: 20,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
})

export default Register
  
