import React, { Component } from "react";
import { View } from "react-native";
import { Input, Card, Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import firebase from "firebase";

export default class SurveyScreen extends Component {
  state = {
    userID: "",
    fullName: "",
    age: 5,
    nationality: "",
    languages: [],
    location: [],
    industry: "",
    pay: "",
    hobbies: []
  };
  componentDidMount() {
    this.setState({
      userID: this.props.navigation.getParam("userID", "NO-ID")
    });
  }

  submitAndNavigate() {
    const {fullName, age, nationality, languages, location, industry, pay, hobbies} = this.state
    firebase
      .database()
      .ref(`/users/${this.state.userID}`)
      .set({ profile: {fullName, age, nationality, languages, location, industry, pay, hobbies} , surveyCompleted: true })
      .then(this.props.navigation.navigate("Main", {userID: this.state.userID}))
  }
  render() {
    return (
      <View>
        <Card title={"Welcome"}>
          <Input
            placeholder="Full Name"
            onChangeText={fullName => this.setState({ fullName })}
            value={this.state.fullName}
          />
          <Input
            placeholder="Age"
            onChangeText={age => this.setState({ age })}
            value={this.state.age}
          />
          <Input
            placeholder="Nationality"
            onChangeText={nationality => this.setState({ nationality })}
            value={this.state.nationality}
          />
          <Input
            placeholder="Spoken Languages"
            onChangeText={languages => this.setState({ languages })}
            value={this.state.languages}
          />
          <Input
            placeholder="Location"
            onChangeText={location => this.setState({ location })}
            value={this.state.location}
          />
          <Input
            placeholder="Preffered Industry"
            onChangeText={industry => this.setState({ industry })}
            value={this.state.industry}
          />
          <Input
            placeholder="Pay Type"
            onChangeText={pay => this.setState({ pay })}
            value={this.state.pay}
          />
          <Input
            placeholder="Hobbies and Interests"
            onChangeText={hobbies => this.setState({ hobbies })}
            value={this.state.hobbies}
          />
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            onPress={() => this.submitAndNavigate()}
            title="Submit"
          />
        </Card>
      </View>
    );
  }
}
