import { Link, Stack } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  const theme = useColorScheme() || "light";

  return (
    <>
      <Stack.Screen
        options={{
          title: "Not Found",
          headerStyle: { backgroundColor: Colors[theme].secondary },
          headerTintColor: Colors[theme].secondaryForeground,
        }}
      />
      <ThemedView className="flex items-center justify-center p-2 h-full">
        <ThemedText type="title">This screen doesn't exist!</ThemedText>

        <Link href="/" className="mt-8 py-2">
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
