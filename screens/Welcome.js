import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {fonts, colors, images} from '../constants/index.js'

function Welcome(props){
    return(
        <View style={styles.container}>
            <View  style={styles.top}>
                <Text style={{ marginTop: 80, fontWeight: '500',  fontSize: fonts.h2, textAlign: 'center',}}>
                    Welcome to <Text style={{fontWeight: 'bold', color: colors.primary, fontSize: fonts.h1,}}>HNFOOD</Text>
                </Text>
            </View>
            <ImageBackground  style={styles.mid} source={images.welcome_image2} resizeMode={'contain'}>
                <Image source={images.welcome_image} style={{width: 250, height: 250, alignSelf: 'center', resizeMode: 'contain',}} />
            </ImageBackground>
            <View  style={styles.bottom}>
                <View style={{paddingStart: 40, paddingTop: 60, width: '70%'}}>
                    <Text style={{fontSize: fonts.h4, fontWeight: '500',}}>Đồ ăn nhanh ngon miệng</Text>
                    <View style={{height: 5}} />
                    <Text style={{fontSize: fonts.h5, fontWeight: '300'}}>Đăng nhập ngay!</Text>
                </View>
                
                <View style={{paddingTop: 60, width: '30%', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: fonts.h4, fontWeight: '500',}}>Đồ</Text>
                </View>
            </View>
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
    }, 
    mid: {
        flex: 40,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 40,
        flexDirection: 'row'
    }
})

export default Welcome
  
