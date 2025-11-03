import { useEffect, useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, Text } from 'react-native'
import { Link, useRouter } from 'expo-router'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import useUser from '../../hooks/useUser'


const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const { state, login } = useUser();

  useEffect(() => {
    if (state.user) {
      router.replace('/(dashboard)/profile');
    }
  }, [state.user]);


  const handleChange = (key, value) => {
    setForm(prev => (
      {...prev, [key]: value}
    ))
  }

  const handleSubmit = async () => {
    try {
      if(!form.email || !form.password) {
        alert('All fields required');
        return;
      }
      console.log("Login form submitted");
      await login(form.email, form.password);

      setForm({
        email: '',
        password: '',
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe={true} className="items-center justify-center flex-1">
        <ThemedText
          title={true}
          className="text-4xl font-bold text-center"
        >
          Login Page
        </ThemedText>

        {state.loginError && (
          <Text className="mt-5 text-lg italic text-red-500">{state.loginError}</Text>
        )}

        <ThemedTextInput
          placeholder="Email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
          style={{width: '80%', marginTop: 40}}
        />

        <ThemedTextInput
          placeholder="Password"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
          style={{width: '80%', marginTop: 10}}
        />

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
    </TouchableWithoutFeedback>
  )
}

export default Login
