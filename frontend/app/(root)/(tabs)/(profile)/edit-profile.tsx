import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { images } from '@/constants'

const editProfile = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white">
        <Image source={images.healthy} className="w-52 h-52 mt-2"/>
        <Text className="text-3xl font-semibold mt-6">John Doe</Text>
        <Text className="text-base mt-2">You are currently not subscribed!</Text>
        <View className="mx-4 bg-[#BCF9BC] rounded-2xl">

        </View>
      </View>
    </ScrollView>
  )
}

export default editProfile