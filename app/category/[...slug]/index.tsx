import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Text } from 'react-native'

const Categories = () => {
    const { slug } = useLocalSearchParams();
  return (
    <Text className='text-white'>
      Hello Slug  {slug}
    </Text>
  )
}

export default Categories
