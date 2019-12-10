/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

export default class SegurancaScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Segurança',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/seguranca-icon.png')} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/seguranca-icon.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Segurança</Text>
        </View>
      </View>
    );
  }
}
