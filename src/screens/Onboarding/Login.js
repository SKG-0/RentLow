import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import facebook from '../../assets/images/fb.png';
import google from '../../assets/images/google.png';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
export default function Login({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState(null);
  const [passworderror, setpassworderror] = useState(null);
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
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('AppStack');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setemailerror('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            setemailerror('That email address is invalid!');
          }

          alert(error);
        });
    } else {
      emailvalidator();
      passwordvalidator();
    }
  }
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
              onBlur={() => emailvalidator()}
            />
          </View>
          <Text style={styles.error}>{emailerror}</Text>
          <View style={styles.inputview}>
            <Text style={styles.formtext2}>PASSWORD</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={password => setpassword(password)}
              onBlur={() => passwordvalidator()}
            />
          </View>
          <Text style={styles.error}>{passworderror}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => emailauth()}>
          <Text style={styles.buttontext}>LOGIN</Text>
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
              onPress={() => onGoogleButtonPress()}>
              <Image source={google} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.google}
              onPress={() =>
                onFacebookButtonPress()
                  .then(()=> navigation.navigate('AppStack'))
                  .catch(err=>{
                    alert(err);
                  })
              }>
              <Image source={facebook} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 130,
    backgroundColor: '#4d94ff',
  },
  welcome: {
    fontSize: 34,
    marginTop: 10,
    marginLeft: '6%',
    fontFamily: 'NotoSansJP-Thin',
    color: 'white',
  },
  continue: {
    fontSize: 20,
    marginLeft: '6%',
    fontFamily: 'NotoSansJP-Regular',
    color: 'white',
    marginTop: -40,
  },
  form: {
    marginLeft: '6%',
    marginTop: '15%',
    marginRight: '5%',
  },
  formtext: {
    fontFamily: 'NotoSansJP-Black',
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#a6a6a6',
    fontSize: 17,
    marginTop: '-3%',
  },
  formtext2: {
    fontFamily: 'NotoSansJP-Black',
    fontSize: 18,
  },
  button: {
    width: '90%',
    height: '9%',
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '5%',
    borderRadius: 10,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontFamily: 'NotoSansJP-Bold',
  },
  signup: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: '1%',
    fontFamily: 'NotoSansJP-Regular',
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
    marginBottom:'10%'
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  google: {
    backgroundColor: 'white',
    elevation: 6,
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 14,
  },
});
