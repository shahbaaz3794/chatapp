import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.splashText}>splash screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05679E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: '#fff',
    fontSize: 40,
  },
});

export default SplashScreen;
