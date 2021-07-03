import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Components
import Artists from "./screens/Artists";
import Settings from "./components/Settings";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <Tab.Navigator>
        <Tab.Screen name="Artists" component={Artists} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//<Tab.Screen name="Home" component={Home} />
//<Tab.Screen name="Settings" component={Settings} />