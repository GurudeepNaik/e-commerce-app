import { StatusBar, useColorScheme } from "react-native";

export const ThemedStatusBar = () => {
  const theme = useColorScheme() ?? "light";
  const barStyle = theme === "dark" ? "light-content" : "dark-content";
  const backgroundColor = theme === "dark" ? "black" : "white";
  return (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      translucent={true}
    />
  );
};
