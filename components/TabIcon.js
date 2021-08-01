import React from "react";
import { View, Text, Image } from "react-native";
import { colors } from "../constants";

export default function TabIcon({ focused, icon, label }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          height: 25,
          width: 25,
          tintColor: focused ? colors.white : colors.secondary,
        }}
        source={icon}
      />
      <Text style={{ color: focused ? colors.white : colors.secondary }}>
        {label}
      </Text>
    </View>
  );
}
