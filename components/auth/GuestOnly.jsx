import { useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { useRouter } from 'expo-router';
import Loader from '../loader';

const GuestOnly = ({ children }) => {
  const { state } = useUser();
  const router = useRouter();

  useEffect(() => {
    if(state.authChecked && state.user) {
      router.replace('/profile')
    }
  }, [state.user, state.authChecked]);

  if(!state.authChecked || state.user) {
    return <Loader text="Logging in..." />
  }

  return children;
}

export default GuestOnly
