import React from "react";
import { View, Text, Image } from "react-native";

export default function TabIcon({ focused, icon, label }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image style={{ height: 25, width: 25 }} source={icon} />
      <Text>{label}</Text>
    </View>
  );
}
