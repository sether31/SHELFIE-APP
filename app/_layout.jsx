import '../global.css'
import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../constants/color";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.navBackground }}>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground  },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{title: 'Home'}} />
        <Stack.Screen name="contact" options={{title: 'Contact'}} />
      </Stack>
    </SafeAreaView>
  )
}

export default RootLayout

