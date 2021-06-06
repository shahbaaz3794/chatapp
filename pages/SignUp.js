import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BackHandler} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.loginText}>Sign Up</Text>
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Name"
            placeholderTextColor={'#fff'}
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Email"
            placeholderTextColor={'#fff'}
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Password"
            placeholderTextColor={'#fff'}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Confirm Password"
            placeholderTextColor={'#fff'}
            secureTextEntry={true}
          />
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already a member?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  center: {
    width: '90%',
  },
  loginText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 20,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 25,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#05679E',
    fontSize: 30,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 17,
    marginRight: 5,
  },
  signUpButton: {
    backgroundColor: '#075480',
    height: 30,
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default SignUp;
