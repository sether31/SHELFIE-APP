import { Link } from 'expo-router'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'


const Login = () => {
  const handleSubmit = () => {
    console.log("Login form submitted");
  }
  
  return (
    <ThemedView className="items-center justify-center flex-1">
      <ThemedText
        title={true}
        className="text-4xl font-bold text-center"
      >
        Login Page
      </ThemedText>

      <ThemedButton 
        onPress={handleSubmit}
        title="Login"
        className='px-10 py-4 my-10'
        textClassName='text-xl'
      />
      
      <Link href="/register">
        <ThemedText>Register Instead</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login
