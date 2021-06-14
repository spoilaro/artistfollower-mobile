import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
export default function Album({ albumData }) {
  return (
    <View style={styles.container}>
      <View>
        <Text className="song-name">{albumData.name}</Text>
        <Text className="artist-name">{albumData.artist}</Text>
        <View className="data-container">
          <Text>{albumData.date}</Text>
          <Text>{albumData.amount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    fontSize: 10,
  },
});
