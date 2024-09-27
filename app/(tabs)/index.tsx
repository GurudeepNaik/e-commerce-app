import { ThemedStatusBar } from "@/components/StatusBar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#604AE6]">
      <ThemedStatusBar />
      <Text className="text-white">Hello Home</Text>
    </View>
  );
}
