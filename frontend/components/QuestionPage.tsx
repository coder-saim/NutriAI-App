import { View, Text } from 'react-native';
import React from 'react';
import Radio from '@/components/Radio';

interface QuestionPageProps {
  title: string;
  options: Array<{ label: string; value: string }>;
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const QuestionPage = ({ title, options, selectedValue, onValueChange }: QuestionPageProps) => {
  return (
    <View>
      <Text className="text-2xl text-left font-bold text-black mt-4 mb-8">
        {title}
      </Text>
      <Radio
        options={options}
        checkedValue={selectedValue}
        onChange={onValueChange}
      />
    </View>
  );
};

export default QuestionPage;