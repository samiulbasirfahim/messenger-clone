import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ChatPage() {
  const { username } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: String(username),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft(props) {
            if (!props.canGoBack) return;
            return (
              <Ionicons
                name="arrow-back"
                size={22}
                style={{
                  marginRight: 10,
                }}
                color={"#1877F2"}
              />
            );
          },
        }}
      />
      <View>
        <Text>{username}</Text>
      </View>
    </>
  );
}
