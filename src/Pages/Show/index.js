import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Data from '../../Components/Data';
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
      <ScrollView>
        <View style={{paddingTop: 30, paddingBottom: 75}}>
          <Data
            title="This Is Books"
            publication="April, 2020"
            author="Mashashi Kishimoto"
            uploaded="Faizal Ardhi"
          />

          <Data
            title="This Is Books"
            publication="April, 2020"
            author="Mashashi Kishimoto"
            uploaded="Faizal Ardhi"
          />

          <Data
            title="This Is Books"
            publication="April, 2020"
            author="Mashashi Kishimoto"
            uploaded="Faizal Ardhi"
          />

          <Data
            title="This Is Books"
            publication="April, 2020"
            author="Mashashi Kishimoto"
            uploaded="Faizal Ardhi"
          />

          <Data
            title="This Is Books"
            publication="April, 2020"
            author="Mashashi Kishimoto"
            uploaded="Faizal Ardhi"
          />
        </View>
      </ScrollView>
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
    backgroundColor: 'black',
  },
  menus: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
