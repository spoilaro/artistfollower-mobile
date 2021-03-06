import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabIcon } from "../components";

//Components
import Artists from "../screens/Artists";
import Home from "../screens/Home";

//Icons
import { icons, colors } from "../constants";
import Profile from "../screens/Profile";

//TODO Add right icons

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Home" icon={icons.home} />;
          },
        }}
      />
      <Tab.Screen
        name="Artists"
        component={Artists}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} label="Artists" icon={icons.info} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} label="Artists" icon={icons.info} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
