import React from "react";
import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/ThemedText";
import { SearchBarComponent } from "@/components/SearchBar";

const HomeScreen = () => {
  return (
    <Screen>
      <SearchBarComponent/>
      <ThemedText>Hello Home</ThemedText>
    </Screen>
  );
};

export default HomeScreen;
