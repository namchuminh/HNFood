import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import {colors} from '../constants/index.js'
const {width} = Dimensions.get('screen');

function CategoryHome(props){
    return(
        <View style={styles.product}>
            <TouchableOpacity>
                <Image source={{uri: "http://10.0.2.2:8000" + props.image}} style = {styles.cardImages}/>
                <Text style={{ fontSize: 16, alignSelf: 'center', fontWeight: 'bold', marginTop: 20}}>{props.name}</Text>
                <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 5,
        width: '100%',
    },
})

export default CategoryHome