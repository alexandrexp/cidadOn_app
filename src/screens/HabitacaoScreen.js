/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

export default class HabitacaoScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Habitação',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/habitacao-icon.png')} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/habitacao-icon.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Habitação</Text>
        </View>
      </View>
    );
  }
}
