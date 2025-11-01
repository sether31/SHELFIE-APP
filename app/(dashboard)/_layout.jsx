import { useColorScheme } from "react-native"
import { Colors } from "../../constants/color";
import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  // checker
  const router = useRouter();
  const { state } = useUser();

  useEffect(() => {
    if (!state.user) {
      alert('Please login first')
      router.replace("/login");
    }
  }, [state.user]);

  if (!state.user) return null;

  return (
  <>
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          padding: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarLabelStyle: {
          fontSize: 16, 
          fontWeight: "900", 
        },
      }}
    >
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          )
        }} 
      />
      <Tabs.Screen 
        name="books" 
        options={{ 
          title: 'Books',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "book" : "book-outline"}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          )
        }}
       />
      <Tabs.Screen 
        name="create" 
        options={{ 
          title: 'Create',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "create" : "create-outline"}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          )
        }} 
      />
    </Tabs>
  </>
  )
}

export default DashboardLayout
