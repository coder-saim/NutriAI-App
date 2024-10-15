import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import arrowRight from '@/assets/icons/arrow-right.png';
import { router } from 'expo-router';

export default function SettingsButton({ Name, icon, toggle }: { Name: string, icon: any, toggle: boolean }) {

  const handleOptionPress = async () => {
    Alert.alert("Comming Soon!");
  };

  return (
    <TouchableOpacity onPress={handleOptionPress} className='mt-6 flex-row items-center space-x-4'>
      <View className='w-12 h-12 bg-[#bcf9bc] rounded-lg justify-center items-center'>
        <Image source={icon} className='w-6 h-6' />
      </View>
      <Text className='text-left text-xl font-medium flex-1'>{Name}</Text>
      {toggle && <Image source={arrowRight} className='w-8 h-8 ml-auto'/>}
    </TouchableOpacity>
  );
}