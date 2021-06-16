import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Animated } from "react-native";
import { Button } from "react-native-elements";
import CONSTANTS from "../Constants";

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

  //Hooks
  const [listOpen, setListOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  const albumListChanger = () => {
    return listOpen ? styles.openedList : styles.container;
  };

  const openAlbums = () => {
    setListOpen(!listOpen);
  };

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
    backgroundColor: CONSTANTS.COLOR.PRIMARY,
    padding: 5,
    borderRadius: 5,
    height: 200,
    transition: "ease",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  openedList: {
    height: 400,
    backgroundColor: CONSTANTS.COLOR.PRIMARY,
    padding: 5,
    borderRadius: 5,
  },
});
