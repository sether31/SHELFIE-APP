import { Text, View } from 'react-native'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Books = () => {
  return (
    <ThemedView safe={true} className="items-center justify-center flex-1"> 
      <ThemedText title="true" className='mt-10 text-4xl font-bold'>
        Your Reading List
      </ThemedText>
    </ThemedView>
  )
}

export default Books

