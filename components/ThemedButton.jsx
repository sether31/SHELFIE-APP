import { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export const Variants = {
  primary: {
    base: 'bg-blue-500',
    pressed: 'bg-blue-700',
    text: 'text-white',
  },
  secondary: {
    base: 'bg-gray-500',
    pressed: 'bg-gray-700',
    text: 'text-white',
  },
  danger: {
    base: 'bg-red-500',
    pressed: 'bg-red-700',
    text: 'text-white',
  },
  outline: {
    base: 'border border-gray-500',
    pressed: 'border-gray-700',
    text: 'text-gray-700',
  },
};


const ThemedButton = ({ 
  title, 
  variant = 'primary', 
  className = '', 
  textClassName = '', 
  onPress,
  ...props 
}) => {

  const [pressed, setPressed] = useState(false);
  const btn = Variants[variant] || Variants.primary;

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`rounded-lg ${pressed ? btn.pressed : btn.base} ${className}`}
      onPress={onPress}
      {...props}
    >
      <Text className={`${btn.text} ${textClassName}`}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 24,    
    paddingHorizontal: 12,
    borderRadius: 12,
  }
})

export default ThemedButton
