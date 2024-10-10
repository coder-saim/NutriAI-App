import { View, Text } from 'react-native'
import React from 'react'
import InputField from '@/components/InputField'

const BasicInfo = () => {
  return (
    <View>
      <Text className="text-2xl text-left font-bold text-black mt-24 mb-10">
        Please mention your basic info
      </Text>
      <InputField
            label="Age"
            placeholder="Age"
            className="rounded-lg"
            keyboardType="numeric"
          />
      <InputField
            label="Height"
            placeholder="Gender"
            className="rounded-lg"
          />
      <InputField
            label="Weight"
            placeholder="Weight"
            className="rounded-lg"
            keyboardType="numeric"
          />
    </View>
  )
}

export default BasicInfo