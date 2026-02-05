import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: "index",
};

export default function RottLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  );
}
