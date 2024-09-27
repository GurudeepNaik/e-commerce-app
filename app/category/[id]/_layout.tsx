import { Stack, useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  const { id } = useLocalSearchParams();

  const resolvedId = Array.isArray(id) ? id[0] : id;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: resolvedId }} />
    </Stack>
  );
}