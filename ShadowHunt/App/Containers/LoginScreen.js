import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Card, Button } from "react-native-elements";
import firebase from "firebase";
import { connect } from 'react-redux'
import UserActions from '../App/Redux/UsersRedux'

class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  navigateOptions(uid) {
    const user = firebase
    .database()
    .ref("users")
    .child(uid)

    if (user!==null){
      this.props.navigation.navigate("Main"), { userID: uid };
    } else {
      this.props.navigation.navigate("Survey", { userID: uid });
    }
  }
  handleLogin = () => {
    const { email, password } = this.state;
    this.props.loginUser({ email, password })
    // firebase.auth().signInWithEmailAndPassword(email, password)
    firebase
      .auth()
      .signInWithEmailAndPassword("anushkajain10@gmail.com", "12345678")
      .then(user => this.navigateOptions(user.user.uid))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Card title={"Welcome"}>
          <Input
            placeholder=" Email"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Input
            placeholder=" Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            onPress={this.handleLogin}
            title="Login"
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => { dispatch(UserActions.getUser(email, password)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
