import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ReleaseCounter() {
  return (
    <View style={styles.container}>
      <Text>No new releases today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "gray",
  },
});
