import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppBar = ({appBarText}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height:50
        }}>
        <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold',color:'#05679E'}}>{appBarText}</Text>
        <Icon style={{marginRight:10}} name="ios-ellipsis-vertical" size={22} color={'#05679E'}/>
      </View>
    </>
  );
};

export default AppBar;
