/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

export default class AmbienteScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Meio Ambiente',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/ambiente-icon.png')} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/ambiente-icon.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Meio Ambiente</Text>
        </View>
      </View>
    );
  }
}
