import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioProps } from '@/types/type';

const Radio = ({
  options,
  checkedValue,
  onChange,
}: RadioProps) => {
  return (
    <View className='w-full'>
      {options.map((option) => {

        let active = checkedValue === option.value;

        return (
          <TouchableOpacity 
            className={`h-16 w-full flex-row items-center px-4 rounded-2xl mb-6 border-2 ${active ? 'bg-[#D1FADD] border-[#47E275]': 'bg-[#E7F0FE] border-[#B4BAC2]'}`}
            onPress={() => onChange(option.value)} // Pass the value of the selected option
            key={option.value}
          >
            <MaterialIcons
              name={active ? 'radio-button-checked' : 'radio-button-unchecked'}
              size={24}
              color={active ? '#074191' : '#B4BAC2'}
            />
            <Text className={`text-lg font-bold ml-4 ${active ? 'text-black' : 'text-[#B4BAC2]'}`}>
              {option.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
};

export default Radio;