/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

export default class EducacaoScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Educação',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/educacao-icon.png')} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/educacao-icon.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Educação</Text>
        </View>
      </View>
    );
  }
}
