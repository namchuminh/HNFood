import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {fonts, colors, images} from '../constants/index.js'
import {TopSearch} from '../components/index.js'
const {width} = Dimensions.get('screen');

const DATA = [
    {
      id: '1',
      title: 'Vegetables',
      image: images.vegetables,
    },
    {
      id: '2',
      title: 'Fruits',
      image: images.fruits,
    },
    {
        id: '3',
        title: 'juice',
        price: 50.000,
        image: images.juices,
      },
  ];


function Category(props){

    const renderItem = ({ item }) => {
        return (
            <View style={styles.product}>
                <TouchableOpacity>
                    <Image source={images.drinks} style = {styles.cardImages}/>
                    <Text style={{ fontSize: 14, alignSelf: 'center', fontWeight: 'bold'}}>Vegetables</Text>
                    <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    </View>
                </TouchableOpacity>
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
                <Image source={images.banner} style={{width: '100%', height: 160, borderRadius: 10}}/>
                    <Text style = {{fontSize: 20, top: 10}}> Stay home food</Text> 
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
                <View style={{alignSelf: 'center', width: '100%', top: 30, justifyContent: 'space-between', flexDirection: 'row', }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        style={{marginBottom: 70, flexDirection: 'row'}}
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
        height: 90,
        width: width / 3 - 20,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.inactive
    },
    cardImages: {
        height: 60,
        borderRadius: 10,
        width: '100%',
    },

})

export default Category
  
