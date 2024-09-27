import { Stack, useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  const { slug } = useLocalSearchParams();

  const resolvedId = Array.isArray(slug) ? slug.join("/") : slug;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: resolvedId }} />
    </Stack>
  );
}