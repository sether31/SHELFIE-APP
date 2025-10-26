import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/color';

const ThemedText = ({title = false, className = 'text-lg', ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;
  return (
    <Text
      className={`${className || ''}`}
      style={[
        {color: textColor}
      ]}
      {...props}
    />
  )
}

export default ThemedText


