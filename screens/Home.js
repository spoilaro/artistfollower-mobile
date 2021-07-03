import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

//Components
import ReleaseCounter from "../components/ReleaseCounter";
import AlbumView from "../components/AlbumView";

export default function Home() {
  return (
    <ImageBackground
      style={styles.imageStyle}
      source={require("../assets/note.jpg")}
    >
      <View style={styles.container}>
        <ReleaseCounter />
        <AlbumView />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 13,
    justifyContent: "space-around",
    height: "100%",
  },

  imageStyle: {
    height: "100%",
  },
});
