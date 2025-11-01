import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../constants/color";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/UserContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
  <UserProvider>
    <StatusBar style="auto" />
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground  },
        headerTintColor: theme.title,
        headerTitleAlign: 'center'
      }}
      >
        <Stack.Screen name="index" options={{name: 'Home'}} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(dashboard)" options={{headerShown: false}} />
    </Stack>
  </UserProvider>
  )
}

export default RootLayout
