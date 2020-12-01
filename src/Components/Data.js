import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Data(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: '17%',
      }}>
      <Image style={styles.Image} source={require(`./Images/ff.png`)} />
      <View style={{paddingLeft: 30}}>
        <Text style={{color: 'white', paddingBottom: 5}}>{props.title}</Text>
        <Text style={{color: 'white'}}>Publication Date :</Text>
        <Text style={{color: '#b2bec3', paddingBottom: 5}}>
          {props.publication}
        </Text>
        <Text style={{color: 'white'}}>Author :</Text>
        <Text style={{color: '#b2bec3', paddingBottom: 5}}>{props.author}</Text>
        <Text style={{color: 'white'}}>Uploaded By :</Text>
        <Text style={{color: '#b2bec3'}}>{props.uploaded}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
});
