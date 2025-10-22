import { Link } from 'expo-router'

// themes
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemedView 
      className="items-center justify-center flex-1"
    >
      <ThemedText 
        title={true}
        className="text-2xl font-bold"
      >
        About Page
      </ThemedText>
      <Link href="/">
        <ThemedText>Home</ThemedText>
      </Link>
      <Link href="/contact">
        <ThemedText>Contact</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Contact