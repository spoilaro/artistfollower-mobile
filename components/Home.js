import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Components
import ReleaseCounter from "./ReleaseCounter";
import AlbumView from "./AlbumView";

export default function Home() {
  return (
    <View style={styles.container} >
      <ReleaseCounter />
      <AlbumView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 13,

  }
})
