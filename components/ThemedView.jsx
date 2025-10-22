import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/color'

const ThemedView = ({...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[
        {backgroundColor: theme.background}
      ]}
      {...props}
    />
  )
}

export default ThemedView
