import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import axios from "axios";
import ArtistButton from "../components/ArtistButton";
import { colors } from "../constants";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

export default function Profile() {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: "100%",
      }}
    >
      <View style={{backgroundColor: "#4f4f4f", borderWidth: 1, borderRadius: 5}}>
        <Text style={{ color: colors.white, fontSize: 25, padding: 10 }}>
          Followed Artists
        </Text>
      </View>
      <SearchBar></SearchBar>
      <ArtistButton/>
      <ArtistButton/>
      <ArtistButton/>
    </View>
  );
}

const styles = StyleSheet.create({});
