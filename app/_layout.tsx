import '../global.css';

import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Stack } from 'expo-router';

export default function Layout() {
    const user = true;

    return (
        <KeyboardProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}>
                {user ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
            </Stack>
        </KeyboardProvider>
    );
}
