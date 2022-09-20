import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import {colors} from '../constants/index.js'
const {width} = Dimensions.get('screen');

function CategoryHome(props){
    return(
        <View style={styles.product}>
            <TouchableOpacity>
                <Image source={props.image} style = {styles.cardImages}/>
                <Text style={{ fontSize: 14, alignSelf: 'center', fontWeight: 'bold'}}>{props.title}</Text>
                <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default CategoryHome