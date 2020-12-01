import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function index({navigation}) {
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
    <View style={styles.contain}>
      <Text style={styles.heading}>Add Books</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder={'Title'}
          placeholderTextColor={'#FFFFFF'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder={'Publication'}
          placeholderTextColor={'#FFFFFF'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder={'Author'}
          placeholderTextColor={'#FFFFFF'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder={'Pages'}
          placeholderTextColor={'#FFFFFF'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
          placeholder={'ISBN'}
          placeholderTextColor={'#FFFFFF'}
        />

        <TouchableOpacity style={styles.upload}>
          <Text style={{color: 'black', textAlign: 'center'}}>
            Attach The Literature
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploads}>
          <Text style={{color: 'white', textAlign: 'center'}}>Upload</Text>
        </TouchableOpacity>
      </View>

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
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    color: 'white',
    marginTop: 30,
    fontSize: 30,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#636e72',
    width: 300,
    backgroundColor: '#2d3436',
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  upload: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#636e72',
    backgroundColor: '#b2bec3',
    width: 200,
    padding: 20,
  },
  uploads: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#AF2E1C',
    padding: 20,
  },
  menus: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
