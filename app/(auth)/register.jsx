import { useState } from 'react'
import { Text } from 'react-native'
import { Link } from 'expo-router'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import useUser from '../../hooks/useUser'


const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { state, register } = useUser();

  const handleChange = (key, value) => {
    setForm(prev => (
      {...prev, [key]: value}
    ))
  }

  const handleRegister = async () => {
    console.log('Register form submitted');
    if(!form.email || !form.password) {
      alert('All fields required');
      return;
    }
    const result = await register(form.email, form.password);

    if (result.status === 'success') {
      alert(result.message || 'Registration successful!');
    } else {
      alert(result.message || 'Something went wrong.');
    }

    setForm({
      email: '',
      password: '',
    });
  }
  return (
    <ThemedView safe={true} className="items-center justify-center flex-1">
      <ThemedText
        title={true}
        className="text-4xl font-bold text-center"
      >
        Register Page
      </ThemedText>

      {state.registerError && (
        <Text className="mt-5 text-lg italic text-red-500">{state.registerError}</Text>
      )}
      <ThemedTextInput
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => handleChange('email', text)}
        style={{width: '80%', marginTop: 20}}
      />

        <ThemedTextInput
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => handleChange('password', text)}
        style={{width: '80%', marginTop: 10}}
      />

      <ThemedButton
        onPress={handleRegister}
        title={state.loading ? "Registering.." : "Register"}
        disabled={state.loading} 
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
