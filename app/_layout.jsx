import { Stack } from "expo-router"

const RootLayout = () => {
  return (
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#1D4ED8'  },
        headerTintColor: '#ffff',
      }}
    >
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="contact" options={{title: 'Contact'}} />
    </Stack>
  )
}

export default RootLayout

