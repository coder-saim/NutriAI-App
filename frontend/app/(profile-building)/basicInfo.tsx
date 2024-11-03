import { View, Text } from 'react-native'
import React from 'react'
import InputField from '@/components/InputField'

const BasicInfo = () => {
  return (
    <View>
      <Text className="text-2xl text-left font-bold text-black mt-8 mb-10">
        Please mention your basic info
      </Text>
      <InputField
            label="Age"
            placeholder="Age"
            containerStyle='h-16 px-4 rounded-2xl mb-2 bg-white border border-[#B4BAC2]'
            inputStyle='text-lg font-bold text-black'
            keyboardType="numeric"
          />
      <InputField
            label="Gender"
            placeholder="Gender"
            containerStyle='h-16 px-4 rounded-2xl mb-2 bg-white border border-[#B4BAC2]'
            inputStyle='text-lg font-bold text-black'
          />
      <InputField
            label="Height"
            placeholder="Height"
            containerStyle='h-16 px-4 rounded-2xl mb-2 bg-white border border-[#B4BAC2]'
            inputStyle='text-lg font-bold text-black'
            keyboardType="numeric"
          />
      <InputField
            label="Weight"
            placeholder="Weight"
            containerStyle='h-16 px-4 rounded-2xl mb-2 bg-white border border-[#B4BAC2]'
            inputStyle='text-lg font-bold text-black'
            keyboardType="numeric"
          />
    </View>
  )
}

export default BasicInfo