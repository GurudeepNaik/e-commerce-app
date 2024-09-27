import { ThemedStatusBar } from "@/components/StatusBar";
import { View, Text } from "react-native";

export default function Cart() {
  return (
    <View className="flex-1 items-center justify-center bg-[#604AE6]">
      <ThemedStatusBar />
      <Text className="text-white">Hello Cart</Text>
    </View>
  );
}
