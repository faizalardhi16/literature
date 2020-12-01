import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Data from '../../Components/Data';

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
        <View style={styles.box}>
          <Image
            style={styles.images}
            source={require('../../Components/Images/joko.jpg')}
          />
          <View style={styles.row}>
            <Text style={styles.text}>
              <Icon name="envelope" size={20} /> {` `} Email :
            </Text>
            <Text style={styles.text}>jokowi@gmail.com</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>
              <Icon name="phone" size={20} /> {` `} Phone :
            </Text>
            <Text style={styles.text}>088212131290</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>
              <Icon name="map-marker" size={20} /> {` `} Address :
            </Text>
            <Text style={styles.text}>Jalan Suka Remaja Muda</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>
              <Icon name="venus-mars" size={20} /> {` `} Gender :
            </Text>
            <Text style={styles.text}>Male</Text>
          </View>
        </View>
        <Text style={{color: 'white', marginTop: 30, fontSize: 30}}>
          My Literature
        </Text>
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
    alignItems: 'center',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginTop: 20,
    paddingRight: 10,
  },
  box: {
    backgroundColor: 'grey',
    marginTop: 70,
    padding: 40,
    borderRadius: 10,
  },
  images: {
    width: 250,
    height: 150,
  },
  menus: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
