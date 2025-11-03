import { useColorScheme, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/color'

const ThemedView = ({safe = false, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if(safe) return (
    <SafeAreaView
      style={[
        {backgroundColor: theme.background}
      ]}
      {...props}
    />
  )

  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        {backgroundColor: theme.background},
        {paddingTop: insets.top},
        {paddingBottom: insets.bottom}
      ]}
      {...props}
    />
  )
}

export default ThemedView
