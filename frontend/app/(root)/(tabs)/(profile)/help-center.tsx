import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'

const helpCenter = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white">
        <Image source={images.healthService} className="w-80 h-80 mt-4"/>
        <Text className='text-xl font-semibold'>24/7 Help Center</Text>
        <Text className='text-sm mt-1'>We are all here on earth to help others</Text>
      </View>
    </ScrollView>
  )
}

export default helpCenter