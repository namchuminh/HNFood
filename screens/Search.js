import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {fonts, colors, images} from '../constants/index.js'
import {TopSearch, CategoryHome} from '../components/index.js'
const {width} = Dimensions.get('screen');

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Bánh',
      price: 70.000,
      image: images.cakes,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Hamburger',
      price: 50.000,
      image: images.hamburger,
    },
    {
        id: '3ac68afc-c695-48d3-a4f8-fbd91aa97f53',
        title: 'Pizza',
        price: 150.000,
        image: images.pizza,
      },
  ];


function Search(props){

    const renderItem = ({ item }) => {
        return (
            <View style={styles.product}>
                <Image source={images.hamburger} style = {styles.cardImages}/>
                <Text style={{ fontSize: 14, alignSelf: 'center', fontWeight: 'bold'}}>Hamburger</Text>
                <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary}}>50.000đ</Text>
                    <TouchableOpacity style={{alignSelf: 'flex-end',backgroundColor: colors.primary, width: 30, height: 30, borderTopLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}}>
                        <Icon name='plus-circle' style={{textAlign: 'center', alignSelf: 'center' }} size={20} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    const handleScroll = (event) => {
        Keyboard.dismiss()
    }
      
    return(
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} onScroll={(event) => handleScroll(event)}>
        <View style={styles.container}>
            <TopSearch title={'Tìm Kiếm'} />
            <View  style={styles.mid}>
                <View style={{alignSelf: 'center', width: '100%', top: 20, justifyContent: 'space-between', flexDirection: 'row',}}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsVerticalScrollIndicator={false} 
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style = {{fontSize: 20, top: 40}}><Ionicons name='fast-food' size={20}/> Sản phẩm nổi bật</Text>
                <View style={{alignSelf: 'center', width: '100%', top: 50, justifyContent: 'space-between', flexDirection: 'row', }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsVerticalScrollIndicator={false} 
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style = {{fontSize: 20, top: 70}}><Icon name='star' size={20} /> Đánh giá tốt</Text>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        style={{marginTop: 100, marginBottom: 100, flexDirection: 'row'}}
                        showsVerticalScrollIndicator={false} 
                        showsHorizontalScrollIndicator={false}
                    />
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
        height: '80%',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    product: {
        height: 210,
        width: width / 2 - 30,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.inactive
    },
    cardImages: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },

})

export default Search
  
