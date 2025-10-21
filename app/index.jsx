import { Text, View } from 'react-native'
import '../global.css'

const Home = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl font-bold text-blue-500">The Number 1</Text>
      <Text className="text-xl text-blue-500">Reading List App</Text>
    </View>
  )
}

export default Home
