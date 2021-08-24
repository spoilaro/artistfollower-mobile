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

export default function Profile() {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: "100%",
      }}
    >
      <Text>Profile</Text>
    </View>
  );
}
