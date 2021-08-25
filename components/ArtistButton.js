import React from "react";
import FONTS from "../constants/fonts";

const imHuman =
  "https://cdn.icon-icons.com/icons2/916/PNG/512/Human_icon-icons.com_71855.png";
const imPlus =
  "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function ArtistButton({ name, image }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text
            style={{
              fontSize: FONTS.size.SEMI_SMALL,
              marginLeft: 10,
              color: "#d1d1d1",
            }}
            className="artist-name"
          >
            {name}
          </Text>
        </View>
      </View>
      <View style={{ marginRight: 10 }}>
        {/* <TouchableOpacity>
          <Image style={styles.addimage} source={{ uri: imPlus }} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  image: {
    margin: 5,
    width: 40,
    height: 40,
    backgroundColor: "white",
  },
  addimage: {
    width: 25,
    height: 25,
  },
  button: {
    flex: 1,
    marginLeft: "80%",
  },
});

//OLD BUTTON:
{
  /* <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text
            style={{ fontSize: FONTS.size.SEMI_SMALL, marginLeft: 10, color: "#d1d1d1" }}
            className="artist-name"
          >
            {name}
          </Text>
        </View>
      </View>
      <View style={{ marginRight: 10 }}>
        <TouchableOpacity>
          <Image style={styles.addimage} source={{ uri: imPlus }} />
        </TouchableOpacity>
      </View>
    </View> */
}
