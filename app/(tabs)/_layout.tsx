import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
    </Tabs>
  );
};

export default _Layout;
