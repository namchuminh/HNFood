import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import { colors } from '../constants/index.js'
const { width } = Dimensions.get('screen');

function CategoryDetails(props) {
    return (

            <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={props.image} style={styles.cardImages} />
            </View>
    )
}

const styles = StyleSheet.create({
    cardImages: {
        height: 230,
        width: 300,
        borderRadius: 5,
        marginHorizontal: 10,
        
    }

})

export default CategoryDetails