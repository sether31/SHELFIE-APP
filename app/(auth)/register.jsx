import { Link } from 'expo-router'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  const handleSubmit = () => {
    console.log('Register form submitted')
  }
  return (
    <ThemedView className="items-center justify-center flex-1">
      <ThemedText
        title={true}
        className="text-4xl font-bold text-center"
      >
        Register Page
      </ThemedText>

      <ThemedButton
        onPress={handleSubmit}
        title="Register"
        className='px-10 py-4 my-10'
        textClassName='text-xl'
      />
      
      <Link href="/login" className='mt-8'>
        <ThemedText>Login Instead</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Register
