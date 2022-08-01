import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import google from '../../assets/images/google.png';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
export default function Login({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState(null);
  const [passworderror, setpassworderror] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '18409459095-ejk7mhigmmptn1bqn2oefatpbbfedqs0.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      alert(error);
    }
  }
  async function emailauth() {
    if (emailerror == '' && passworderror == '') {
      setloading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('AppStack');
          setloading(false);
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            setemailerror('Invalid email');
            setloading(false);
          }

          if (error.code === 'auth/wrong-password') {
            setpassworderror('Invalid password');
            setloading(false);
          }
          if (error.code === 'auth/user-not-found') {
            setemailerror('User not found');
            setloading(false);
          }
        });
    } else {
      emailvalidator();
      passwordvalidator();
    }
  }
  const emailvalidator = () => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (email == '' || regex.test(email) == false) {
      setemailerror('Enter a valid email address !');
    } else {
      setemailerror('');
    }
  };
  const passwordvalidator = () => {
    if (password.length < 6) {
      setpassworderror('Password should be greater than 6 characters !');
    } else {
      setpassworderror('');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.continue}>Login To Continue</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputview}>
            <Text style={styles.formtext}>EMAIL</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={email => setemail(email)}
              onSubmitEditing={() => emailvalidator()}
            />
          </View>
          <Text style={styles.error}>{emailerror}</Text>
          <View style={styles.inputview}>
            <Text style={styles.formtext}>PASSWORD</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={password => setpassword(password)}
              onSubmitEditing={() => passwordvalidator()}
            />
          </View>
          <Text style={styles.error}>{passworderror}</Text>
          <TouchableOpacity
            onPress={() => {
              emailerror == ''
                ? auth()
                    .sendPasswordResetEmail(email)
                    .then(function (user) {
                      alert('Password reset link sent !');
                    })
                    .catch(error => {
                      if (error.code === 'auth/invalid-email') {
                        setemailerror('User not registered');
                      }
                      if (error.code === 'auth/user-not-found') {
                        setemailerror('No user found');
                      }
                    })
                : emailvalidator();
            }}>
            <Text style={{color: '#4d94ff', marginTop: '-1%'}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => emailauth()}>
          <Text style={styles.buttontext}>LOGIN</Text>
          {loading == true ? (
            <ActivityIndicator
              color="white"
              size={20}
              style={{alignSelf: 'center', marginLeft: '5%'}}
            />
          ) : (
            <View></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signup}>
            Don't have an account ?
            <Text style={{color: '#4d94ff'}}> Signup</Text>
          </Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.google}
              onPress={() =>
                onGoogleButtonPress()
                  .then(() => navigation.navigate('AppStack'))
                  .catch(err => console.log(err))
              }>
              <Text style={styles.googletext}>Continue With Google</Text>
              <Image source={google} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: '20%',
    backgroundColor: '#4d94ff',
  },
  welcome: {
    fontSize: 30,
    marginTop: 10,
    marginHorizontal: '6%',
    fontFamily: 'NotoSansJP-Thin',
    color: 'white',
  },
  continue: {
    fontSize: 18,
    marginHorizontal: '6%',
    fontFamily: 'NotoSansJP-Regular',
    color: 'white',
    marginTop: '-7%',
  },
  form: {
    marginHorizontal: '6%',
    marginTop: '10%',
    marginRight: '5%',
  },
  formtext: {
    fontFamily: 'NotoSansJP-Black',
    fontSize: 16,
    color: 'white',
  },
  input: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#595959',
    fontSize: 14,
    paddingTop: '-5%',
    color: '#cccccc',
  },
  formtext2: {
    fontFamily: 'NotoSansJP-Black',
    fontSize: 18,
  },
  button: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '5%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
  },
  signup: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'NotoSansJP-Regular',
    color: 'white',
  },
  or: {
    fontSize: 20,
    marginTop: '3%',
    textAlign: 'center',
    color: '#8c8c8c',
    fontFamily: 'NotoSansJP-Bold',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    marginBottom: '10%',
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  google: {
    backgroundColor: '#333333',
    width: '90%',
    height: 45,
    justifyContent: 'center',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '3%',
  },
  error: {
    color: '#ff6666',
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 14,
  },
  googletext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: '5%',
    justifyContent: 'center',
    color: 'white',
  },
});
