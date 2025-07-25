import TabIconComponent from "@/components/tabIcon";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIconComponent
                focused={focused}
                icon={icons.home}
                image={images.highlight}
                text={"Home"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIconComponent
                focused={focused}
                icon={icons.search}
                image={images.highlight}
                text={"Search"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIconComponent
                focused={focused}
                icon={icons.save}
                image={images.highlight}
                text={"Saved"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIconComponent
                focused={focused}
                icon={icons.person}
                image={images.highlight}
                text={"Profile"}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
