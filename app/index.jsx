// css
import '../global.css'

import { Link } from 'expo-router'

// themes
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'
import ThemeLogo from '../components/ThemeLogo'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView className="items-center justify-center flex-1">
      {/* card */}
      <ThemedCard className="p-8 rounded-lg w-[300px]">
        <ThemeLogo className="block w-full h-40 mx-auto mb-8" />
        
        <ThemedText
          title={true}
          className="text-2xl font-bold text-center"
        >
          The Number 1
        </ThemedText>
        <Spacer height={10} />
        <ThemedText
          className="text-lg text-center"
        >
          Reading List App
        </ThemedText>
      </ThemedCard>
      
      <Spacer height={50} />
      <Link href="/login">
        <ThemedText>Login your account</ThemedText>
      </Link>
        <Link href="/register">
        <ThemedText>Register your account</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home
