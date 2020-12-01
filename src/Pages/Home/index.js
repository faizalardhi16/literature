import React from 'react';
import {TextInput, View, StyleSheet, Image, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../Navbar';

const Home = ({navigation}) => {
  const handleShow = () => {
    navigation.navigate('Show');
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const goAdd = () => {
    navigation.navigate('AddBooks');
  };
  const goCollect = () => {
    navigation.navigate('Show');
  };
  const goProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.body}>
      <Image source={require('../../logoz.png')} style={styles.images} />
      <TextInput
        style={styles.search}
        placeholder={'Search'}
        placeholderTextColor={'white'}
      />
      <TouchableOpacity onPress={() => handleShow()} style={styles.button}>
        <Text style={{color: '#FFFFFF'}}>Search</Text>
      </TouchableOpacity>

      <View
        style={{
          color: 'white',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
        }}>
        <Icon
          onPress={() => goHome()}
          size={30}
          style={styles.menus}
          name="home"
        />

        <Icon
          onPress={() => goProfile()}
          size={30}
          style={styles.menus}
          name="user"
        />

        <Icon
          name="book"
          size={30}
          onPress={() => goCollect()}
          style={styles.menus}
        />

        <Icon
          name="plus-square"
          size={30}
          onPress={() => goAdd()}
          style={styles.menus}
        />
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
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#636e72',
    width: 300,
    backgroundColor: '#2d3436',
    paddingLeft: 15,
    marginBottom: 5,
    marginTop: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#AF2E1C',
    marginTop: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#FFFFFF',
  },
  menus: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
export default Home;
