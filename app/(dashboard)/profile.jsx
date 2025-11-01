import { Text, View } from 'react-native'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Profile = () => {
  return (
    <ThemedView safe={true} className="items-center justify-center flex-1"> 
      <ThemedText title="true" className='mb-10 text-4xl font-bold'>
        Your Email
      </ThemedText>

      <ThemedText className='mb-10 text-lg'>
        Time to start reading some books...
      </ThemedText>
    </ThemedView>
  )
}

export default Profile

