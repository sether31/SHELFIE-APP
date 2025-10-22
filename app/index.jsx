import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import '../global.css'

const Home = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl font-bold text-blue-500">The Number 1</Text>
      <Text className="text-xl text-blue-500">Reading List App</Text>
      <Link href="/contact">Contact</Link>
    </View>
  )
}

export default Home
