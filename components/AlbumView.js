import React from "react";
import { View, FlatList, Text } from "react-native";

//Components
import Album from "./Album";

export default function AlbumView() {
  let album = {
    name: "Song name",
    artist: "Artist",
    date: "5.5.2021",
    songs: 10,
  };

  let albumArray = [
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
    album,
  ];

  return (
    <View>
      <FlatList
        data={albumArray}
        renderItem={({ item }) => <Album albumData={item} />} //TODO add list as SectionListBasics
      />
    </View>
  );
}
