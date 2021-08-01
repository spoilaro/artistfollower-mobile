import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Animated } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import { colors } from "../constants";

//Components
import Album from "./Album";

export default function AlbumView() {
  let album = {
    name: "Song name",
    artist: "Artist",
    date: "5.5.2021",
    songs: 10,
  };

  const [albumArray, setAlbumArray] = useState([]);

  //OPENING ALBUMS
  const [listOpen, setListOpen] = useState(false);
  const albumListChanger = () => {
    return listOpen ? styles.openedList : styles.container;
  };
  const openAlbums = () => {
    setListOpen(!listOpen);
  };

  //GETTING DATA
  async function getData() {
    const response = await axios.get("http://localhost:5001/api/dummydata");
    console.log(response.data);
    setAlbumArray(response.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={albumListChanger()}>
      <AlbumButtons onClick={openAlbums} />
      <FlatList
        data={albumArray}
        renderItem={({ item }) => <Album albumData={item} />} //TODO add list as SectionListBasics
      />
    </View>
  );
}

const AlbumButtons = ({ onClick }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="See More" onPress={onClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
    height: 200,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  openedList: {
    height: 400,
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
});
