import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/color";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground  },
          headerTintColor: theme.title,
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="login" options={{title: "Login"}} />
        <Stack.Screen name="register" options={{title: "Register"}} />
      </Stack>
    </>
  )
}

export default RootLayout

