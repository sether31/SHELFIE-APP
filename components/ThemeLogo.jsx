import { Image } from 'react-native'
import logo from '../assets/logo.png'


const ThemeLogo = ({...props}) => {
  return (
    <Image
      source={logo}
      {...props}
    />
  )
}

export default ThemeLogo
