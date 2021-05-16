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
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Loading from 'react-native-whc-loading';
import {IkonExit} from '../../assets';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confpassword: '',
    };
  }

  render() {
    const {navigation, route} = this.props;
    // console.log(username);
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} enabled>
          <TouchableOpacity
            style={styles.exit}
            onPress={() => navigation.navigate('DanusTera')}>
            <Image source={IkonExit}></Image>
          </TouchableOpacity>
          <Text style={styles.heading}>Atur Password</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Password Baru</Text>
            <TextInput
              placeholder="Masukkan Password"
              style={styles.textinput}
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Konfirmasi Password</Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              style={styles.textinput}
              onChangeText={confpassword => this.setState({confpassword})}
            />
          </View>
          <View
            style={{paddingTop: 20, width: WindowWidth - 40, borderRadius: 10}}>
            <Button title="Simpan" onPress={this._simpan} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  _simpan = async () => {
    const {password, confpassword} = this.state;
    const {route} = this.props;
    var username = route.params.username;
    console.log('username', username);
    if (password != confpassword) {
      alert('Password berbeda');
    } else if (password == '') {
      alert('Isi password baru');
    } else {
      fetch('https://danustera.000webhostapp.com/aturpass.php', {
        method: 'POST',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'Berhasil') {
            Alert.alert('', 'Password berhasil dirubah', [
              {
                text: 'OK',
                onPress: () => this.props.navigation.navigate('DanusTera'),
              },
            ]);
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
  exit: {
    alignSelf: 'flex-end',
  },
});
