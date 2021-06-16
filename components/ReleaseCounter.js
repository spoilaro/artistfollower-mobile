import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "gray",
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 40,
    textAlign: "start",
  },
});
