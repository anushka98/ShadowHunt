import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Card, CheckBox, Button, Icon } from "react-native-elements";
import JobCard from "../components/JobCard";
export default function LinksScreen() {
  const users = [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
    }
  ];
  return (
    <ScrollView style={styles.container}>
      <JobCard
        title="JOB-NAME"
        location="loc"
        date="01/10/2020"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
      />
      <JobCard
        title="JOB-NAME"
        location="loc"
        date="01/10/2020"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
      />
      <JobCard
        title="JOB-NAME"
        location="loc"
        date="01/10/2020"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
      />
      <JobCard
        title="JOB-NAME"
        location="loc"
        date="01/10/2020"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
      />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Jobs"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
