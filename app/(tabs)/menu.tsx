import { Tabs } from 'expo-router';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function MenuPage() {
  return (
    <>
      <Tabs.Screen
        options={{
          title: 'Menu',
          headerTitleStyle: {},
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => {
            return <SimpleLineIcons name="menu" size={20} color={color} />;
          },
        }}
      />
    </>
  );
}
