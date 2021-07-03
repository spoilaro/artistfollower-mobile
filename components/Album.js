import React from "react";
import CONSTANTS from "../Constants";

const imAd = "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"

import { View, Text, Image, StyleSheet } from "react-native";
export default function Album({ albumData }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imAd}} />
      <View>
        <Text className="song-name">{albumData.name}</Text>
        <Text className="artist-name">{albumData.artist}</Text>
        <View className="data-container">
          <Text>{albumData.releaseDate}</Text>
          <Text>{albumData.songCount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "95%",
    padding: 5,
    fontSize: 10,
    //backgroundColor: CONSTANTS.COLOR.SECONDARY,
    color: CONSTANTS.COLOR.TEXT,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
});
