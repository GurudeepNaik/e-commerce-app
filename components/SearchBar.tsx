import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { SearchBar } from "@rneui/themed";
import { Header } from "@rneui/themed";

import { ThemedView } from "./ThemedView";
import { Icon } from "./Icon";
import { Colors } from "@/constants/Colors";
import {
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { cn } from "@/utils/cn";
import { ListItem } from "@rneui/base";

type SearchBarComponentProps = {};
const searchList = [
  {
    value: "Hello",
  },
  {
    value: "Hello2",
  },
  {
    value: "Hello3",
  },
];
interface SearchListProps {
  value: string;
}
export const SearchBarComponent: React.FunctionComponent<
  SearchBarComponentProps
> = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<SearchListProps[]>([]);
  const [loading, setLoading] = useState(false);
  const theme = useColorScheme() ?? "light";
  const updateSearch = async (search: string) => {
    try {
      setResults([]);
      
      if (search === "") {
        return;
      }

      setLoading(true);
      setSearch(search);
      await delay(1000);
      setResults(searchList);
      setLoading(false);
    } catch (error) {
      setResults([]);
      console.log(error);
      // TODO: toast
    }
  };

  const delay = (milisecond: number) => {
    return new Promise((resolve, reject) => setTimeout(resolve, milisecond));
  };
  
  return (
    <ThemedView className="w-full">
      <SearchBar
        platform="android"
        clearIcon
        searchIcon
        cancelIcon
        onCancel={() => setResults([])}
        inputContainerStyle={{
          backgroundColor: Colors[theme].muted,
          borderBottomColor: Colors[theme].primary,
          borderBottomWidth: 1,
        }}
        containerStyle={{
          backgroundColor: Colors[theme].muted,
        }}
        inputStyle={{ color: Colors[theme].mutedForeground }}
        onChangeText={updateSearch}
        placeholder="Search for product..."
        placeholderTextColor={Colors[theme].mutedForeground}
        showLoading={loading}
        value={search}
      />
      {results.map((each, i) => (
        <TouchableOpacity key={i}>
          <ListItem
            containerStyle={{
              backgroundColor: Colors[theme].mutedForeground,
              borderBottomColor: Colors[theme].primary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content className="d-flex justify-between items-center flex-row">
              <View className="d-flex justify-between gap-5 items-center flex-row">
                <Icon name="search" size={21} className="opacity-60" />
                <ListItem.Title style={{ color: Colors[theme].muted }}>
                  {each.value}
                </ListItem.Title>
              </View>
              <Icon
                name="arrow-up-left"
                family="Feather"
                size={21}
                className="opacity-60"
              />
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
};
