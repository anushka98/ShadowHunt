import React, { Component } from "react";
import { Card, ListItem, Icon } from "react-native-elements";
import {
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import styles from './styles/styles'

export default class ProfileScreen extends Component {
 
  render() {
    console.log(this.props.navigation.dangerouslyGetParent().getParam('userID'))
    return (
      <View>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri:
              "https://thumbs.dreamstime.com/z/portrait-beautiful-young-woman-face-profile-isolated-white-34304628.jpg"
          }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri:
                  "https://thumbs.dreamstime.com/z/portrait-beautiful-young-woman-face-profile-isolated-white-34304628.jpg"
              }}
            />
            <Text style={styles.userNameText}>Anushka Jain</Text>
          </View>
        </ImageBackground>
        <View>
          <ListItem title=" Age: 3" bottomDivider />
          <ListItem title=" Nationality: Belgian" bottomDivider />
          <ListItem title=" Languages: Belgian" bottomDivider />
          <ListItem title=" Locations: Belgian" bottomDivider />
          <ListItem title=" Preffered Industry: Belgian" bottomDivider />
          <ListItem title=" Pay Type: Belgian" bottomDivider />
          <ListItem title=" Hobbies and Interests: Belgian" bottomDivider />
        </View>
      </View>
    </View>
    );
  }
}

