import { Text, View } from 'react-native'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import useUser from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'
import { useState } from 'react'



const Profile = () => {
  const { state, logout } = useUser();
  const [loggingOut, setLoggingOut] = useState(false)
  const handleLogout = () => {
    setLoggingOut(true)
    setTimeout(() => {
      logout(); 
    }, 2000);  
  };  

  if(loggingOut) {
    return (
      <ThemedView safe={true} className="items-center justify-center flex-1"> 
        <ThemedText title="true" className='mb-10 text-2xl italic font-bold'>
          Logging out...
        </ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} className="items-center justify-center flex-1"> 
      <ThemedText title="true" className='mb-10 text-4xl font-bold'>
        Your Email: {state.user?.email ?? 'Not logged in'}
      </ThemedText>

      <ThemedText className='mb-10 text-lg'>
        Time to start reading some books...
      </ThemedText>

      <ThemedButton
        title="Logout"
        variant = 'secondary'
        className = 'px-8 py-4'
        textClassName = 'text-lg'
        onPress={handleLogout}
      >
        
      </ThemedButton>
    </ThemedView>
  )
}

export default Profile

