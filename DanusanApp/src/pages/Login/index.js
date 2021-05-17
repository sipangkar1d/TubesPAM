import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';
import Loading from 'react-native-whc-loading';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} enabled>
          <Text style={styles.heading}>Masuk</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder="Masukkan Username"
              style={styles.textinput}
              onChangeText={username => this.setState({username})}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              style={styles.textinput}
              onChangeText={password => this.setState({password})}
            />
          </View>
          <View
            style={{paddingTop: 20, width: WindowWidth - 40, borderRadius: 10}}>
            <Button title="Masuk" onPress={this._login} />
          </View>
          <Text style={{paddingTop: 5}}>
            Belum punya akun ?{' '}
            <Text
              style={styles.highlight}
              onPress={() => navigation.navigate('Daftar')}>
              Daftar
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  _login = async () => {
    const {username, password} = this.state;

    if (username == '') {
      alert('Username masih kosong');
    } else if (password == '') {
      alert('Password masih kosong');
    } else {
      fetch('http://tubespam.awesomeproject.id/Login.php', {
        method: 'POST',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'ok') {
            // redirect to Beranda page
            this.props.navigation.navigate('DanusTera', {
              username: username,
            });
          } else {
            alert(JSON.stringify(responseJson));
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
}

export default Login;

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196f3',
    marginTop: WindowHeight / 4 - 20,
    paddingBottom: 20,
  },
  row: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#696969',
    fontSize: 16,
  },
  textinput: {
    borderBottomWidth: 1,
    borderBottomColor: '#2196f3',
    width: WindowWidth - 40,
    paddingTop: 5,
    paddingBottom: 1,
    fontSize: 14,
  },
  highlight: {
    fontWeight: 'bold',
  },
});
