import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  const user = true;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      {user ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
    </Stack>
  );
}
