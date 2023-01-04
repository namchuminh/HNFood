import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js'
import * as Location from 'expo-location';

const axios = require('axios').default;

function MapDelivery({navigation, route}) {
    const { itemId } = route.params
    const [data, setData] = useState({})
    const [coor, setCoor] = useState([])
    const {token} = useContext(AuthContext)


    useEffect(()=>{
        axios.get('https://namchuminh.pythonanywhere.com/api/user/?user='+itemId, {
            headers: {
                Authorization: "Bearer " + token.access,
            }
        })
        .then(function (response) {
            // handle success
            setData(response.data)
        })
        .catch(function (error) { 
            // handle error
            console.log(error);
        })

        axios.get("http://api.positionstack.com/v1/forward?access_key=10f8b14400faccd03545a2584ba13249&query="+data.address)
        .then((res)=>{
            setCoor([...[res.data.data[0].latitude, res.data.data[0].longitude]])
        })
    }, [coor])

    return (
        
        <View style={styles.container}>
            <MapView style={styles.map} showsUserLocation initialRegion={{
                latitude: 20.985710784811005, 
                longitude: 105.83416174196871,
                latitudeDelta: 0.0092,
                longitudeDelta: 0.0081,
            }}>
                <MapView.Marker coordinate={
                    {
                        latitude: 20.985710784811005,
                        longitude: 105.83416174196871
                    }} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapDelivery