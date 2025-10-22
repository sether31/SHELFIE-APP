import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/color'

const ThemedCard = ({...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[
        {backgroundColor: theme.uiBackground}
      ]}
      {...props}
    />
  )
}

export default ThemedCard
