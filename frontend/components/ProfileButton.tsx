import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import arrowRight from '@/assets/icons/arrow-right.png';
import { router } from 'expo-router';

export default function ProfileButton({ Name, icon, page }: { Name: string, icon: any, page: string }) {

  const onOptionPress = async () => {
    router.push(`/(root)/(tabs)/(profile)/${page}`);
  };

  return (
    <TouchableOpacity onPress={onOptionPress} className='mt-6 flex-row items-center space-x-4'>
      <View className='w-12 h-12 bg-[#bcf9bc] rounded-lg justify-center items-center'>
        <Image source={icon} className='w-6 h-6' />
      </View>
      <Text className='text-left text-xl font-medium flex-1'>{Name}</Text>
      <Image source={arrowRight} className='w-8 h-8 ml-auto'/>
    </TouchableOpacity>
  );
}
