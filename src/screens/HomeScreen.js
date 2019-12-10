/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

import Maps from "../components/Maps";

class Drawer extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Inicio',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/image-home.png')} />
    ),
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/image/home-image.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Tela Inicial</Text>
        </View>
      </View>
    );
  }

export default function HomeScreen() {
  return <Maps />;
}
