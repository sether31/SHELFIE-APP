import { useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { useRouter } from 'expo-router';
import Loader from '../loader';

const UserOnly = ({ children }) => {
  const { state } = useUser();
  const router = useRouter();

  useEffect(() => {
    if(state.authChecked && !state.user) {
      alert('Please login first')
      router.replace('/login')
    }
  }, [state.user, state.authChecked]);

  if(!state.authChecked || !state.user) {
    return <Loader text="Authenticating..." />
  }

  return children;
}

export default UserOnly
