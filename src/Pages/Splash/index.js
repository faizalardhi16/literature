import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Landing');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Image source={require('../../logoz.png')} style={styles.images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  images: {
    width: '70%',
    height: '10%',
  },
});

export default Splash;
