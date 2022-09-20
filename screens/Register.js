import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {fonts, colors, images} from '../constants/index.js'


function Register({navigation}){
    
    return(
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                    <TouchableOpacity onPress={()=> navigation.goBack() }>
                        <Icon name='arrow-left'  size={27}  style={{paddingTop: 15}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{paddingVertical: 35}}>
                                <Text style={{color: 'black', fontSize: fonts.h1, fontWeight: 'bold', alignSelf: 'center'}}>Tạo Tài Khoản</Text>
                        </View>
                        <View style={styles.searchSection}>
                                <FontAwesome name='phone' size={18} color={'black'} style={{paddingStart: 15}}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nhập số điện thoại"
                                />
                        </View>
                        <View style={styles.searchSection}>
                                <FontAwesome name='user' size={18} color={'black'} style={{paddingStart: 15}}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nhập tài khoản"
                                />
                        </View><View style={styles.searchSection}>
                                <FontAwesome name='key' size={18} color={'black'} style={{paddingStart: 15}}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nhập mật khẩu"
                                />
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent:'flex-end', paddingVertical: 20}}>
                                <Text style={{alignSelf: 'center', marginEnd: 10, fontSize: fonts.h1, fontWeight: 'bold', color: 'black'}}>Đăng Ký</Text>
                                <TouchableOpacity style={{alignSelf: 'flex-end', backgroundColor: 'black', width: 50, height: 35, borderRadius: 50, justifyContent: 'center'}}>
                                    <Icon name='arrow-right' style={{textAlign: 'center', alignSelf: 'center' }} size={25} color={'#f2f2f2'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>   
                    
            </View>
        </KeyboardAwareScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      paddingHorizontal: 10,
    },
 
    searchSection: {
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
  
