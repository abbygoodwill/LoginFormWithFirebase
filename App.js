import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import firebase from "firebase";
import { SwitchNavigator } from 'react-navigation';

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

export default class App extends React.Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBn48HPoXN-FUE2MQ27BgpPsGtWu357f8g",
      authDomain: "rnloginpractice.firebaseapp.com",
      databaseURL: "https://rnloginpractice.firebaseio.com",
      projectId: "rnloginpractice",
      storageBucket: "rnloginpractice.appspot.com",
      messagingSenderId: "681572710088"
    };
    firebase.initializeApp(config);
  }

  // create our app's navigation stack
  const stackNavigator = SwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Main
    },
    {
      initialRouteName: 'Loading'
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
