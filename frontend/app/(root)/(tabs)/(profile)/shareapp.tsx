import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'
import ProfileTabButton from '@/components/ProfileTabButtons'
import { router } from 'expo-router'


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

  const onBuyPremium = () => {
    router.replace("/subscription")
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white mx-4">
        <Image source={images.avatar} className="w-52 h-52 mt-2"/>
        <Text className="text-3xl font-semibold">John Doe</Text>
        <Text className="text-lg mt-1">You are currently subscribed!</Text>
        <View className="bg-green-100 rounded-xl mt-4 py-3 w-full">
          <Text className="text-xl font-semibold text-center">Premium Features</Text>
          <View className="my-2">
            {points.map((item) => (
              <View key={item.id} className="flex-row items-center mt-1 ml-12">
                <Image source={icons.tick} className="w-6 h-6"/>
                <Text className="ml-3 text-lg tracking-wide">{item.point}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text className='text-[#50A950] text-base font-medium my-3'>Share the app and get 50% off</Text>
        <ProfileTabButton
            title="Share App"
            className="mt-3 mx-4"
            onPress={onBuyPremium}
        />
        <Text className="font-bold mt-2 text-red-600">Cancel Subscription</Text>
      </View>
    </ScrollView>
  )
}

export default Subscription