import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {fonts, colors, images} from '../constants/index.js'
const {width} = Dimensions.get('screen');

function Home(props){
    return(
        <View style={styles.container}>
            <View  style={styles.top}>
                <View style={{flex:1}}/>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={{fontSize: 22, fontWeight: '500', color: 'black', top: -50}}><Ionicons name='menu-outline' size={20} />        Xin chào!                           <Ionicons name="notifications-outline" size ={20}></Ionicons><Ionicons name="cart-outline" size ={20}></Ionicons></Text>
                    </View>  
                </View>
                
            </View>
            <View  style={styles.search}>
            <TouchableOpacity style={{backgroundColor: 'white', width: '100%', height: 50, borderRadius: 30, justifyContent: 'center', alignSelf: 'center', borderWidth: 1, top: -25}}>
                        <Text style={{paddingStart: 15, fontSize: fonts.h5, fontWeight: '400'}}><Ionicons name='search-outline' size={18} />  Tìm kiếm</Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.mid}>
                <View style={{alignSelf: 'center', width: '100%', top: 20, justifyContent: 'space-between', flexDirection: 'row', marginLeft: -20}}>
                    <View style={styles.product}>
                        <Image source={images.hamburger} style = {styles.cardImages}/>
                        <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Hamburger</Text>
                        <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: colors.primary}}>50.000đ</Text>
                        <TouchableOpacity style={{marginTop: -29, marginLeft: 116,backgroundColor: colors.primary, width: 40, height: 40, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                            <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.product}>
                        <Image source={images.pizza} style = {styles.cardImages}/>
                        <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Pizza</Text>
                        <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: colors.primary}}>139.000đ</Text>
                        <TouchableOpacity style={{marginTop: -29, marginLeft: 116,backgroundColor: colors.primary, width: 40, height: 40, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                            <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style = {{fontSize: 20, top: 40}}>Sản phẩm nổi bật</Text>
                <View style={{alignSelf: 'center', width: '100%', top: 50, justifyContent: 'space-between', flexDirection: 'row', marginLeft: -20}}>
                    <View style={styles.product}>
                        <Image source={images.kem} style = {styles.cardImages}/>
                        <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Kem</Text>
                        <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: colors.primary}}>10.000đ</Text>
                        <TouchableOpacity style={{marginTop: -28, marginLeft: 116,backgroundColor: colors.primary, width: 40, height: 40, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                            <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.product}>
                        <Image source={images.suachua} style = {styles.cardImages}/>
                        <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Sữa chua mít</Text>
                        <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: colors.primary}}>15.000đ</Text>
                        <TouchableOpacity style={{marginTop: -28, marginLeft: 116,backgroundColor: colors.primary, width: 40, height: 40, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                            <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style = {{fontSize: 20, top: 70}}>Đánh giá tốt</Text>
                <View style={{alignSelf: 'center', width: '100%', top: 80, justifyContent: 'space-between', flexDirection: 'row', marginLeft: -20}}>
                    <View style={styles.product}>
                        <Image source={images.mochi} style = {styles.cardImages}/>
                        <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Mochi</Text>
                        <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: colors.primary}}>70.000đ</Text>
                        <TouchableOpacity style={{marginTop: -28, marginLeft: 116,backgroundColor: colors.primary, width: 40, height: 40, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                            <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.product}>
                        <Image source={images.chocolate} style = {styles.cardImages}/>
                        <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Chocolate</Text>
                        <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: colors.primary}}>200.000đ</Text>
                        <TouchableOpacity style={{marginTop: -28, marginLeft: 116,backgroundColor: colors.primary, width: 40, height: 40, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                            <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                        </TouchableOpacity>
                    </View>
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
        flex: 10,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
    }, 
    search:{
        flex: 4,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        
    },
    mid: {
        flex: 86,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    product: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    cardImages: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },

})

export default Home
  
