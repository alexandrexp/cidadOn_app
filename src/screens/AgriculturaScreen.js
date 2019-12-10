/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

export default class AgriculturaScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Agricultura/Pecuária',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/agricultura-icon.png')} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/agricultura-icon.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Agricultura/Pecuária</Text>
        </View>
      </View>
    );
  }
}
