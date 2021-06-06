import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import CallIcons from 'react-native-vector-icons/Ionicons';
import CallStatusIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/appBar';

const Calls = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <AppBar appBarText={'Calls'} />
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
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
                <Badge
                  status="success"
                  badgeStyle={styles.status}
                  containerStyle={{
                    position: 'absolute',
                    bottom: 13,
                    left: 45,
                  }}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.userName}</Text>
                  <View style={styles.callStatus}>
                    <CallStatusIcons name="call-missed" size={20} color="red" />
                    <Text style={styles.lastMessage}>Outgoing</Text>
                  </View>
                </View>
                <View style={styles.iconContainer}>
                  <Text style={styles.date}>22/12/2021</Text>
                  {true ? (
                    <CallIcons name="ios-videocam" size={20} color={'grey'}/>
                  ) : (
                    <CallIcons name="ios-call" size={20} color={'grey'} />
                  )}
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
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
  },
  listContainer: {
    flexDirection: 'row',
    // backgroundColor: 'lightblue',
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
  callStatus: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Manjari-Regular',
  },
  lastMessage: {
    marginTop: 2,
    fontFamily: 'Manjari-Regular',
    color: '#05679E',
  },
  status: {
    height: 12,
    width: 12,
    borderRadius: 10,
  },
  date: {
    fontFamily: 'Manjari-Regular',
    color: 'grey',
  },
});

export default Calls;
