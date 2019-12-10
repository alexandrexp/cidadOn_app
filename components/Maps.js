import React, { Component } from 'react';
import MapView, { Marker , PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, StyleSheet,  Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const pinHostital = require('../assets/images/pinHospital1.png')

export default class Maps extends Component {
  state = {
    location: null,
    errorMessage: null,
    timePassed:false,
    markers:[
     
    ], 
    
  };


  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  
 render() {
  const MapStyle = [
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
      {
          visibility: "off"
      }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]
    let text = 'Waiting..';
    let longitude = undefined
    let latitude = undefined
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      longitude = JSON.parse(this.state.location["coords"].longitude);
      latitude = JSON.parse(this.state.location["coords"].latitude);
    }
    while(longitude == undefined & latitude == undefined){
      if(latitude == true & longitude == true){
        this.setState({timePassed: true})
      }
      return (
        <View style={styles.loadingView}>
           <Text style={styles.loading}>{text}</Text>
        </View>
     
      )
    }
    
      return (
        <View style={styles.container}>

          <MapView 
          //arrumar essa parte , salvar cordanadas do click no state e fazer aparecer opções de pin (policial,medico,etc...)
            onPress={ (event) => console.log({"cordenadas":event.nativeEvent.coordinate,"id":Math.floor(Math.random() * 100000000)}) }

            initialRegion={{
              latitude, 
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            style={styles.mapStyle}
            showsPointsOfInterest={false}	
            showsBuildings={false}
            minZoomLevel={16}
            zoomEnabled={false}
            rotateEnabled={false}
          >
            {this.state.markers.map(marker => (
              <Marker 
                key={marker.id}
                style={styles.pin}
                coordinate={{
                  latitude: marker.cordenadas.latitude, 
                  longitude: marker.cordenadas.longitude,
                }}
                image={pinHostital}
              >
              </Marker>
            ))}
            
          </MapView>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loading:{
    fontSize:16,
    fontWeight:'bold',
    color:'#8989'
  },
  loadingView:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
});

 

