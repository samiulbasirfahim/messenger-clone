import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function NotificationPage() {
  return (
    <Tabs.Screen
      options={{
        title: 'Notifications',
        headerTitleStyle: {},
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color }) => {
          return <FontAwesome name="bell" size={20} color={color} />;
        },
      }}
    />
  );
}
