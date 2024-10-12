import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'
import CustomButton from '@/components/CustomButton'

const Subscription = () => {

  const points = [
    {
      id: 1,
      point: "Scan food in Realtime"
    },
    {
      id: 2,
      point: "Scan food in Realtime"
    },
    {
      id: 3,
      point: "Scan food in Realtime"
    }
  ]

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white mx-8">
        <Image source={images.healthy} className="w-52 h-52 mt-2"/>
        <Text className="text-3xl font-semibold mt-6">John Doe</Text>
        <Text className="text-lg font-medium mt-1">You are currently not subscribed!</Text>
        <View className="bg-[#BCF9BC] rounded-2xl mt-6 py-4 w-full">
          <Text className="text-2xl font-semibold text-center">Premium Features</Text>
          <View className="my-2">
            {points.map((item) => (
              <View key={item.id} className="flex-row items-center mt-2 ml-12">
                <Image source={icons.tick} className="w-6 h-6"/>
                <Text className="ml-3 text-lg tracking-wide">{item.point}</Text>
              </View>
            ))}
          </View>
        </View>
        <CustomButton
            title="Buy Premium"
            className="mt-8 mx-4 h-20"
          />
      </View>
    </ScrollView>
  )
}

export default Subscription