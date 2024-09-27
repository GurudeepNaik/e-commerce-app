import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Text } from 'react-native'

const Categories = () => {
    const { id } = useLocalSearchParams();
  return (
    <Text className='text-white bg-slate-600'>
      Hello id  {id}
    </Text>
  )
}

export default Categories
