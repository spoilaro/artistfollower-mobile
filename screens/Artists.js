import React, { Component, useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import axios from "axios";
import { colors } from "../constants";

export default function Artists() {
  const [searchText, setSearchText] = useState("");
  const [resText, setResText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  async function sendSearch() {
    const response = await axios.get(
      `http://localhost:5001/api/_search/${searchText}`
    );
    const artistId = response.data;

    const response2 = await axios.get(
      `http://localhost:5001/api/artists/${artistId}`
    );

    console.log(response2.data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type artist name here"
          value={searchText}
          onChange={handleChange}
        />

        <Button title="Press Me" onPress={sendSearch} />
      </View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
  },
  input: {
    padding: 5,
    borderWidth: 0.5,
    flex: 3,
  },
  button: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
});
