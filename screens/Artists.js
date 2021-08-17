import React, { useState } from "react";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import axios from "axios";
import ArtistButton from "../components/ArtistButton";
import { colors } from "../constants";
import { set } from "react-native-reanimated";

const searchIcon="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png";

export default function Artists() {
  const [searchText, setSearchText] = useState("");
  const [resText, setResText] = useState([]);
  const [resImage, setResImage] = useState([]);

  const randomData = ["hey", "hey", "hey"];

  function handleChange(event) {
    setSearchText(event.target.value);
    sendSearch()
  }

  async function sendSearch() {
    const response = await axios.get(
      `http://localhost:5001/api/_search/${searchText}`
    );
    const artistId = response.data;

    const response2 = await axios.get(
      `http://localhost:5001/api/artists/${artistId}`
    );

    console.log(response2.data);
    const resObject={
      name: response2.data.name,
      image: response2.data.images[2].url
    }
    setResText([resObject]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchBar
          style={styles.input}
          placeholder="Type artist name here"
          value={searchText}
          onChange={handleChange}
          onSubmitEditing={sendSearch}
        />

        {/*<TouchableOpacity>
          <Image style={styles.button} source={{ uri: searchIcon }} onPress={sendSearch} />
        </TouchableOpacity>*/}
        {/*<Button title="->" onPress={sendSearch} />*/}
      </View>
      <FlatList data={resText} renderItem={({ item }) => <ArtistButton name={item.name} image={item.image} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 5,
  },
  input: {
    color: "#d1d1d1",
    borderWidth: 0.1,
    borderRadius: 5,
    paddingLeft: 5,
    flex: 3,
  },
  button: {
    flex: 1,
    backgroundColor: "white"
  },
  inputContainer: {
    //flexDirection: "row",
  },
});
