import React, {useEffect, useState} from 'react';
import {TextInput, View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Landing = ({navigation}) => {
  const Login = () => {
    navigation.navigate('Login');
  };

  const Register = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.body}>
      <Image style={styles.Image} source={require('../../g12.png')} />
      <Text
        style={{
          fontSize: 50,
          color: 'white',
          width: '80%',
          textAlign: 'center',
          fontFamily: 'Cochin',
        }}>
        source <Text style={{fontStyle: 'italic'}}>of</Text> intelligence
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          width: '80%',
        }}>
        Sign-up and receive unlimited accesss to all of your literatur - share
        your literature.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TouchableOpacity style={styles.button} onPress={() => Login()}>
          <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Register()}>
          <Text style={{textAlign: 'center', color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  search: {
    backgroundColor: '#FFFFFF',
    marginTop: '20%',
    width: '80%',
  },
  Image: {
    width: '50%',
    height: '30%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#AF2E1C',
    marginTop: '10%',
    paddingTop: '8%',
    paddingBottom: '8%',
    paddingLeft: '8%',
    paddingRight: '8%',
    color: '#FFFFFF',
    marginRight: 20,
    marginLeft: 20,
  },
});
export default Landing;
