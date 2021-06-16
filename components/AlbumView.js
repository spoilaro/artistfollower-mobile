import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

//Components
import Album from "./Album";

export default function AlbumView() {
  let album = {
    name: "Song name",
    artist: "Artist",
    date: "5.5.2021",
    songs: 10,
  };

  let albumArray = [album, album, album, album];

  return (
    <View style={styles.container}>
      <AlbumButtons />
      <FlatList
        data={albumArray}
        renderItem={({ item }) => <Album albumData={item} />} //TODO add list as SectionListBasics
      />
    </View>
  );
}

const AlbumButtons = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="See More" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
