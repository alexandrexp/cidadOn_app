/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

export default class SocialScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Assistência Social',
    drawerIcon: ({focused, tintColor}) => (
      <Image source={require('../img/image/social-icon.png')} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 80}}>
          <Image source={require('../img/social-icon.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Assistência Social</Text>
        </View>
      </View>
    );
  }
}
