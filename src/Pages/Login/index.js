import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';

const userInfo = {username: 'admin@gmail.com', password: 'pass1234'};

class Login extends React.Component {
  static navigationOption = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'admin@gmail.com',
      password: 'pass1234',
    };
  }

  render() {
    return (
      <View style={styles.splasharea}>
        <Image source={require('../../g12.png')} style={styles.images} />

        <Text style={styles.text}>SIGN IN</Text>

        <View style={styles.inputarea}>
          <TextInput
            style={styles.Input}
            placeholder={'Email'}
            placeholderTextColor="#FFFFFF"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.Input}
            placeholder={'Password'}
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.95}
          style={styles.button}
          onPress={this._login}>
          <Text style={styles.textBtn}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _login = async () => {
    if (
      userInfo.username == this.state.username &&
      userInfo.password == this.state.password
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('User Did not Found');
    }
  };
}

const styles = StyleSheet.create({
  splasharea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  images: {
    width: '50%',
    height: '20%',
    marginTop: '10%',
  },
  text: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingTop: '7%',
  },
  Input: {
    borderWidth: 2,
    width: 290,
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
    height: 61,
    padding: 10,
    backgroundColor: '#2d3436',
    borderColor: '#b2bec3',
  },
  inputarea: {
    marginTop: 25,
    marginBottom: 20,
  },
  button: {
    height: '8%',
    backgroundColor: '#AF2E1C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 3,
    width: '80%',
  },
  textBtn: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Login;
