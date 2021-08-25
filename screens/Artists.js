import React, { useEffect, useState } from "react";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import { View, StyleSheet, FlatList, Text } from "react-native";
import axios from "axios";
import ArtistButton from "../components/ArtistButton";
import { colors } from "../constants";
import { SwipeListView } from "react-native-swipe-list-view";
import { TouchableOpacity } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { TouchableHighlight } from "react-native";

const searchIcon =
  "https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png";

export default function Artists() {
  const [searchText, setSearchText] = useState("");
  const [resText, setResText] = useState([
    /* { key: 1, name: "Artist", image: searchIcon }, { key: 2 } */
  ]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchText);
      sendSearch();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  const randomData = ["hey", "hey", "hey"];

  function handleChange(event) {
    setSearchText(event.target.value);
    //sendSearch()
  }

  async function sendSearch() {
    const response = await axios.get(
      `http://localhost:5001/api/_search/${searchText}`
    );
    const artistId = response.data;

    const response2 = await axios.get(
      `http://localhost:5001/api/artists/${artistId}`
    );

    console.log(response2.data.name);
    const resObject = {
      name: response2.data.name,
      image: response2.data.images[2].url,
    };
    setResText([resObject]);
  }

  function followClick() {
    console.log("Clicked");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchBar
          style={styles.input}
          inputStyle={{ backgroundColor: "#454545" }}
          containerStyle={{
            backgroundColor: "#383838",
            borderWidth: 1,
            borderRadius: 2,
          }}
          placeholder="Type artist name here"
          value={searchText}
          onChange={handleChange}
          onSubmitEditing={sendSearch}
        />
      </View>
      <SwipeListView
        data={resText}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: colors.primary }}>
            <ArtistButton name={item.name} image={item.image} />
          </View>
        )}
        renderHiddenItem={() => (
          <View
            style={{
              backgroundColor: "#666666",
              height: 50,
              alignItems: "flex-end",
              justifyContent: "center",
              paddingRight: 10,
            }}
          >
            <TouchableOpacity onPress={followClick}>
              <Text style={{ color: "white" }}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={-62}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    //padding: 5,
    height: "100%",
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
    backgroundColor: "white",
  },
  inputContainer: {},
});

//Old render of a artistbutton:
/*  <TouchableOpacity style={{
            height: 50,
            backgroundColor: colors.primary
          }} >
            <ArtistButton name={item.name} image={item.image}/>
          </TouchableOpacity> */
