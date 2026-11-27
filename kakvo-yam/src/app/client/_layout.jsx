import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/theme';

export default function ClientLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.textMuted,
      tabBarLabelStyle: { fontSize: 11, fontWeight: '800', letterSpacing: 0.4, marginBottom: 2 },
      tabBarItemStyle: { borderRadius: 14, marginHorizontal: 6, marginVertical: 6 },
      tabBarStyle: { backgroundColor: Colors.surface, borderTopColor: Colors.border, borderTopWidth: 1, height: 76, paddingTop: 8, paddingBottom: 8 },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarLabel: 'HOME', tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name="diary" options={{ title: 'Diary', tabBarLabel: 'DIARY', tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarLabel: 'PROFILE', tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} /> }} />
    </Tabs>
  );
}
