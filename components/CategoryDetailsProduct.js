import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions, FlatList, ScrollView, Keyboard } from 'react-native'
import { colors } from '../constants/index.js'
const { width } = Dimensions.get('screen');

function CategoryDetailsProduct(props) {
    return (
        <View style={styles.product}>
            <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={{uri: "http://10.0.2.2:8000"+props.image}} style={styles.cardImages} />
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>{props.name}</Text>
                    <Text style={{ color: colors.primary }}>{props.price}</Text>
                </View>
                <TouchableOpacity onPress={props.onPress} style={{ alignSelf: 'center', borderWidth: 1, borderRadius: 20, borderColor: colors.primary, paddingHorizontal: 20, paddingVertical: 5, marginBottom: 20, marginRight: 10 }}>
                    <Text style={{ color: colors.primary }}>Thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardImages: {
        height: 100,
        width: 100,
        borderRadius: 10

    },
    product: {
        height: 120,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginHorizontal: 10,
        borderColor: colors.inactive
    },
})

export default CategoryDetailsProduct