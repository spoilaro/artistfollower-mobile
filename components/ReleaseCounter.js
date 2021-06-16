import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CONSTANTS from "../Constants";

export default function ReleaseCounter() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>No new releases today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
    backgroundColor: CONSTANTS.COLOR.PRIMARY,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily: "Montserrat",
  },
  textStyle: {
    fontSize: 40,
    textAlign: "start",
    color: CONSTANTS.COLOR.TEXT,
  },
});
