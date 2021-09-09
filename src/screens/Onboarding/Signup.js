import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import auth from '@react-native-firebase/auth';
import google from '../../assets/images/google.png';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
export default function Signup({navigation}) {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState(null);
  const [namerror, setnamerror] = useState(null);
  const [passworderror, setpassworderror] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '18409459095-ejk7mhigmmptn1bqn2oefatpbbfedqs0.apps.googleusercontent.com',
    });
  }, []);
  const temp="";
  const url = `https://ui-avatars.com/api/?name=${name
    .split(' ')
    .join('+')}&rounded=true&background=4D94FF&color=fff`;
  async function onGoogleButtonPress() {
    try {
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }
  async function emailauth() {
    if (emailerror == '' && passworderror == '') {
      setloading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firestore()
            .collection('Users').doc(auth().currentUser.uid).set({
              email: email,
              name: name,
              password: password,
              image: url,
              uid:auth().currentUser.uid,
              Ads:[],
              Favourites:[]
            })
            .then(() => {
              navigation.navigate('AppStack');
            })
            .catch(err => {
              console.log(err);
            });
          setloading(false);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setemailerror('That email address is already in use!');
            setloading(false);
          }

          if (error.code === 'auth/invalid-email') {
            setemailerror('That email address is invalid!');
            setloading(false);
          }
        });
    } else {
      namevalidator();
      emailvalidator();
      passwordvalidator();
    }
  }
  const emailvalidator = () => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (email == '' || regex.test(email) == false) {
      setemailerror('Enter a valid email address !');
      return false;
    } else {
      setemailerror('');
      return true;
    }
  };
  const passwordvalidator = () => {
    if (password.length < 6) {
      setpassworderror('Password should be greater than 6 characters !');
      return false;
    } else {
      setpassworderror('');
      return true;
    }
  };
  const namevalidator = () => {
    if (/^[A-Za-z ]+$/.test(name) == false || name.length == 0 || name == '') {
      setnamerror('Name is not valid');
      return false;
    } else {
      setnamerror('');
      return true;
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Hello There</Text>
        <Text style={styles.continue}>Signup To Continue</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputview}>
            <Text style={styles.formtext}>NAME</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              onChangeText={name => setname(name)}
              onSubmitEditing={() => namevalidator()}
              autoCapitalize="words"
            />
          </View>
          <Text style={styles.error}>{namerror}</Text>
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
        </View>
        <TouchableOpacity style={styles.button} onPress={() => emailauth()}>
          <Text style={styles.buttontext}>SIGNUP</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signup}>
            Already have an account ?
            <Text style={{color: '#4d94ff'}}> Login</Text>
          </Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.google}
              onPress={() =>
                namevalidator() == true
                  ? onGoogleButtonPress().then(() =>
                      navigation.navigate('AppStack'),
                    )
                  : namevalidator()
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
    height: '15%',
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
    marginTop:'-10%'
  },
  form: {
    marginHorizontal: '6%',
    marginTop: '10%',
    marginRight: '5%'
  },
  formtext: {
    fontFamily: 'NotoSansJP-Black',
    fontSize: 16,
    color:'white'
  },
  input: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#595959',
    fontSize: 14,
    paddingTop:'-5%',
    color:'#cccccc'
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
    color:'white'
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
    marginTop: '2%',
    marginBottom: '8%',
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
