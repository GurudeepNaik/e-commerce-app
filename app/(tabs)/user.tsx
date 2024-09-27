import { ThemedStatusBar } from "@/components/StatusBar";
import { View, Text } from "react-native";

export default function User() {
  return (
    <View className="flex-1 items-center justify-center">
      <ThemedStatusBar />
      <Text className="text-white">Hello User</Text>
    </View>
  );
}
