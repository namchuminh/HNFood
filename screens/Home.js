import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {fonts, colors, images} from '../constants/index.js'
import {TopSearch, CategoryHome} from '../components/index.js'
const {width} = Dimensions.get('screen');

const DATA = [
    {
      id: '1',
      title: 'Sô cô la',
      image: images.chocolate,
    },
    {
      id: '2',
      title: 'Kẹo',
      image: images.keo,
    },
    {
        id: '3',
        title: 'Kem',
        image: images.kem,
    },
    {
        id: '4',
        title: 'Sữa chua mít',
        image: images.suachua,
    },
  ];


function Home(props){

    const renderItem = ({ item }) => {
        return (
            <CategoryHome image={item.image} title={item.title} />
        )
    };

    const renderItem2 = ({ item }) => {
        if(item.id % 2 == 0) {
            return (
                <CategoryHome image={item.image} title={item.title} />
            )
        }
    };

    const handleScroll = (event) => {
        Keyboard.dismiss()
    }

      
    return(
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} onScroll={(event) => handleScroll(event)}>
        <View style={styles.container}>
            <TopSearch title={'Tìm Kiếm'} />
            <View  style={styles.mid}>
                <Image source={images.banner} style={{width: '100%', height: 200, borderRadius: 10}}/>
                <View>
                    <Text style = {{fontSize: 20, top: 10}}> Đồ ăn vặt</Text> 
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
                </View>
                <View style={{height: 350}}>
                    <View style={{alignSelf: 'center', width: '100%', top: 40, justifyContent: 'space-between', flexDirection: 'row',}}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            style={{ marginBottom: 100, flexDirection: 'row'}}
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
        height: '80%',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
})

export default Home
  
