import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'
import ProfileTabButton from '@/components/ProfileTabButtons'

const Purchase = () => {

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
      <View className="flex h-full items-center bg-white mx-4">
        <View className="bg-green-100 rounded-xl mt-6 py-4 w-full">
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
        <View className="bg-[#CBCBCB] h-[1px] w-3/4 my-4">
        </View>
        <View className='w-full'>
            <Text className='text-xl font-medium text-center mb-2'>Choose Your Plan</Text>
            <View className='items-center flex-row justify-start w-full mt-3 ml-4'>
                <Image source={icons.tick} className="w-6 h-6"/>
                <View className='ml-4'>
                    <Text className='text-base font-medium'>Monthly - $7.99/month</Text>
                    <Text className='text-[#999999] text-sm font-medium mt-[2px]'>Try free for 7 days</Text>
                </View>
            </View>
            <View className='items-center flex-row justify-start w-full mt-3 ml-4'>
                <Image source={icons.tick} className="w-6 h-6"/>
                <View className='ml-4'>
                    <Text className='text-base font-medium'>Yearly - $49.99/month</Text>
                    <Text className='text-[#999999] text-sm font-medium mt-[2px]'>Try free for 1 month</Text>
                </View>
                <View className='rounded-3xl bg-[#FF3951] ml-4'>
                  <Text className='text-white text-sm px-3 py-2'>Save 25%</Text>
                </View>
            </View>
        </View>
        <ProfileTabButton
            title="Subscribe"
            className="mx-4 mt-16"
        />
        <Text className='mt-2 font-bold'>Subscriptions will be auto renewed.</Text>
        <Text className='font-bold'>Cancel Anytime. Safe and Secure Payments.</Text>
      </View>
    </ScrollView>
  )
}

export default Purchase