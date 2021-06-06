import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../components/appBar';

const Chats = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <AppBar appBarText={"Chats"}/>
        <View>
          <FlatList
            data={[{userName: 'First Last'}, {userName: 'Second Last'}]}
            renderItem={({item}) => (
              <View style={styles.listContainer}>
                <Avatar
                  size="medium"
                  icon={{name: 'user', type: 'font-awesome'}}
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
                <Badge
                  status="success"
                  badgeStyle={styles.status}
                  containerStyle={{
                    position: 'absolute',
                    bottom: 10,
                    left: 45,
                  }}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.userName}</Text>
                  <Text style={styles.lastMessage}>Last message</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Text style={styles.date}>22/12/2021</Text>
                  <Badge
                    status="error"
                    value="99"
                    badgeStyle={styles.unreadmsgbadge}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopColor: '#05679E',
    borderTopWidth: 0.5,
    padding: 5,
  },
  textContainer: {
    marginLeft: 10,
    flexGrow: 1,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Manjari-Regular'
  },
  lastMessage: {
    marginTop: 2,
    fontFamily: 'Manjari-Regular',
    color:'#05679E'
  },
  status: {
    height: 12,
    width: 12,
    borderRadius: 10,
  },
  unreadmsgbadge: {
    marginTop: 5,
  },
  date: {
    fontFamily: 'Manjari-Regular',
    color:'grey'
  }
});

export default Chats;
