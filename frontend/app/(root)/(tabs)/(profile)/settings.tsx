import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'
import SettingsButton from '@/components/SettingsButton'

const Settings = () => {

  const profileList = [
    {
      id: 1,
      Name: "Language",
      image: icons.profileGreen,
      toggle: true
    },
    {
      id: 2,
      Name: "Dark Mode",
      image: icons.starGreen,
      toggle: false
    },
    {
      id: 3,
      Name: "Location",
      image: icons.settings,
      toggle: false
    },
    {
      id: 4,
      Name: "Notification",
      image: icons.logout,
      toggle: false
    },
    {
      id: 5,
      Name: "Help Center",
      image: icons.bookmark,
      toggle: true
    },
    {
      id: 6,
      Name: "FAQ",
      image: icons.bookmark,
      toggle: true
    },
  ]

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white">
        <View className="items-start w-full px-6 mt-5">
          {profileList.map((item) => (
            <SettingsButton key={item.id} Name={item.Name} icon={item.image} toggle={item.toggle}/>  
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Settings