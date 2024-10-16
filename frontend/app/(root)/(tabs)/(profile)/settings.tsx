import { View, ScrollView } from 'react-native'
import React from 'react'
import { icons } from '@/constants'
import SettingsButton from '@/components/SettingsButton'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Settings = () => {

  const profileList = [
    {
      id: 1,
      Name: "Language",
      image: <FontAwesome size={26} name="language" color="green" />,
      toggle: true,
    },
    {
      id: 2,
      Name: "Dark Mode",
      image: <FontAwesome size={26} name="cloud" color="green" />,
      toggle: false,
    },
    {
      id: 3,
      Name: "Location",
      image: <FontAwesome size={26} name="map" color="green" />,
      toggle: false,
    },
    {
      id: 4,
      Name: "Notification",
      image: <FontAwesome size={26} name="bell" color="green" />,
      toggle: false,
    },
  ];


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