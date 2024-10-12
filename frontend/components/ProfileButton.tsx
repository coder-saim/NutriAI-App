import { View, Text } from 'react-native'
import React from 'react'

export default function ProfileButton({Name}: {Name: string}) {
  return (
    <View className='mt-4 flex-row items-center space-x-4'>
      <View className='w-12 h-12 bg-[#bcf9bc] rounded-lg'></View>  
      <Text className='text-left text-xl font-medium'>{Name}</Text>
    </View>
  )
}