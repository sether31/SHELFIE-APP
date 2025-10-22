import { Text, View } from 'react-native'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl font-bold text-blue-500">Contact Page</Text>
      <Link href="/">Home</Link>
    </View>
  )
}

export default Contact