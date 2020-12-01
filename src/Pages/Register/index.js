import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Register() {
  return (
    <View style={styles.backgroundImage}>
      <Text style={{color: 'white', fontSize: 50, textAlign: 'center'}}>
        {' '}
        Register{' '}
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={'Full Name'}
        placeholderTextColor={'#FFFFFF'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={'Email'}
        placeholderTextColor={'#FFFFFF'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={'Phone'}
        placeholderTextColor={'#FFFFFF'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={'Alamat'}
        placeholderTextColor={'#FFFFFF'}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={'password'}
        placeholderTextColor={'#FFFFFF'}
      />

      <TouchableOpacity style={styles.buttton}>
        <Text
          style={{
            width: '90%',
            textAlign: 'center',
            color: '#FFFFFF',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    width: '80%',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2d3436',
    borderColor: '#b2bec3',
  },
  buttton: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    padding: 20,
    width: '80%',
    backgroundColor: '#AF2E1C',
  },
  logo: {
    width: '50%',
    height: '30%',
    position: 'relative',
    left: '25%',
    marginBottom: '5%',
  },
});
