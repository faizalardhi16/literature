import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Navbar = ({navigation}) => {
  const goHome = () => {
    navigation.navigate('Show');
  };

  return (
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
      <Text onPress={() => goHome()} style={styles.menus}>
        Profile
      </Text>
      <Text style={styles.menus}>My Collection</Text>
      <Text style={styles.menus}>Add Books</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menus: {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
});

export default Navbar;
