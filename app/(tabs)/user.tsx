import { ThemedStatusBar } from "@/components/StatusBar";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function User() {
  return (
    <View className="flex-1 items-center justify-center bg-[#604AE6]">
      <ThemedStatusBar />
      <Text className="text-white">Hello User</Text>
      <Link href="/category/123">Categories/123</Link>
      <Link href="/category/123/345">Categories/123/345</Link>
    </View>
  );
}
