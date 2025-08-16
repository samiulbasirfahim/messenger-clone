import { Tabs } from 'expo-router';
import { Pressable, TouchableOpacity } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        lazy: false,
        tabBarStyle: {
          shadowOpacity: 0,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarButton: (props) => (
          <TouchableOpacity {...(props as any)} activeOpacity={1} />
        ),
      }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="notifications" />
      <Tabs.Screen name="menu" />
    </Tabs>
  );
}
