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
  Alert,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Loading from 'react-native-whc-loading';

class Daftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJk: [
        {label: 'Laki-Laki', value: 0},
        {label: 'Perempuan', value: 1},
      ],
      formData: {
        username: '',
        nama_lengkap: '',
        password: '',
        email: '',
        alamat: '',
        jenis_kelamin: '',
        no_telp: '',
      },
    };
  }

  render() {
    const {
      username,
      nama_lengkap,
      password,
      email,
      alamat,
      jenis_kelamin,
      no_telp,
    } = this.state.formData;
    const {navigation} = this.props;

    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} enabled>
          <Text style={styles.heading}>Daftar Akun</Text>
          <View style={[styles.row, {marginTop: 10}]}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Masukkan nama Lengkap"
              onChangeText={nama_lengkap =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    nama_lengkap,
                  },
                }))
              }
              value={nama_lengkap}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder="Masukkan Username"
              style={styles.textinput}
              onChangeText={username =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    username,
                  },
                }))
              }
              value={username}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              style={styles.textinput}
              onChangeText={email =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    email,
                  },
                }))
              }
              value={email}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Alamat</Text>
            <TextInput
              placeholder="Masukkan Alamat"
              style={styles.textinput}
              onChangeText={alamat =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    alamat,
                  },
                }))
              }
              value={alamat}
            />
          </View>
          <View style={styles.row}>
            <Text style={[styles.label, {marginBottom: 10}]}>
              Jenis Kelamin
            </Text>
            <RadioForm
              radio_props={this.state.dataJk}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              labelStyle={{paddingRight: 15}}
              buttonColor={'#2196f3'}
              animation={true}
              onPress={jenis_kelamin =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    jenis_kelamin,
                  },
                }))
              }
              value={jenis_kelamin}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>No. Telepon</Text>
            <TextInput
              placeholder="Masukkan Nomor Telepon"
              style={styles.textinput}
              onChangeText={no_telp =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    no_telp,
                  },
                }))
              }
              value={no_telp}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              style={styles.textinput}
              onChangeText={password =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    password,
                  },
                }))
              }
              value={password}
            />
          </View>
          <View style={{paddingTop: 20, width: WindowWidth - 40}}>
            <Button title="Daftar" onPress={this._saveData} />
          </View>
          <Text style={{paddingTop: 5}}>
            Sudah punya akun ?{' '}
            <Text
              style={styles.highlight}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </KeyboardAvoidingView>
        <Loading ref="loading" />
      </ScrollView>
    );
  }
  _saveData = async () => {
    const {navigation} = this.props;
    const {
      username,
      nama_lengkap,
      password,
      email,
      alamat,
      no_telp,
    } = this.state.formData;
    this.refs.loading.show();
    if (
      username == '' ||
      nama_lengkap == '' ||
      password == '' ||
      email == '' ||
      alamat == '' ||
      no_telp == ''
    ) {
      Alert.alert('', 'Harap isi semua data', [
        {
          text: 'OK',
        },
      ]);
      this.refs.loading.show(false);
    } else {
      this.refs.loading.show();
      fetch('http://tubespam.awesomeproject.id/buatAkun.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.formData),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'Akun berhasil di daftarkan') {
            setTimeout(() => {
              this.refs.loading.show(false);
              Alert.alert('', responseJson, [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Login'),
                },
              ]);
            }, 1000);
          } else {
            this.refs.loading.show(false);
            alert(JSON.stringify(responseJson));
            // Alert.alert('', 'Username atau email sudah digunakan', [
            //   {
            //     text: 'OK',
            //   },
            // ]);
          }
        })
        .catch(error => {
          this.refs.loading.show(false);
          console.error(error);
        });
    }
  };
}

export default Daftar;

const WindowWidth = Dimensions.get('window').width;

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
  },
  row: {
    alignSelf: 'flex-start',
    marginBottom: 20,
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
