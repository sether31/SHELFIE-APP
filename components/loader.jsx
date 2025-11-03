import { useEffect, useState } from 'react';
import { View, ActivityIndicator, useColorScheme, Text } from 'react-native';
import { Colors } from '../constants/color';
import ThemedText from './ThemedText';

const Loader = ({ text = 'loading...', size = 50, minTime = 3000 }) => {
  const [show, setShow] = useState(true);
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), minTime);

    return () => clearTimeout(timer);
  }, [minTime]);

  if(!show) return null;

  return (
    <View 
      className="fixed inset-0 z-50 flex-row items-center justify-center flex-1 gap-1 bg-opacity-30"
      style={{backgroundColor: theme.backgroundColor}}
    >
      <ActivityIndicator size={size} color={theme.text} />
      <Text
        className="text-xl"
        style={{color: theme.text}}
      >
        {text}
      </Text>
    </View>
  );
};

export default Loader;
