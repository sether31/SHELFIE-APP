import { useColorScheme, TextInput } from 'react-native'
import { Colors } from '../constants/color';

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput 
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 10
        },
        style
      ]}
      {...props}
    />
  )
}

export default ThemedTextInput

