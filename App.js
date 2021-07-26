import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tab"



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <SafeAreaView />
      <Tabs />
    </NavigationContainer>
  );
}

//<Tab.Screen name="Home" component={Home} />
//<Tab.Screen name="Settings" component={Settings} />