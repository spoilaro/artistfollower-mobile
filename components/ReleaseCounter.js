import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants";

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
    backgroundColor: colors.primary,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily: "Montserrat",
  },
  textStyle: {
    fontSize: 40,
    color: colors.white,
  },
});
