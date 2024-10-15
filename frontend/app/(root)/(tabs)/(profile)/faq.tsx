import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { images, icons } from '@/constants';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null); 

  const faqList = [
    {
      id: 1,
      question: "How to use the app?",
      answer: "You can use the app by following the instructions provided in the user manual."
    },
    {
      id: 2,
      question: "How to contact support?",
      answer: "You can contact support by sending an email to our support team."
    },
    {
      id: 3,
      question: "How to change password?",
      answer: "You can change your password by going to the settings page and clicking on the change password option."
    },
    {
      id: 4,
      question: "How to renew subscription?",
      answer: "You can renew your subscription by going to the subscription page and clicking on the renew subscription option."
    },
    {
      id: 5,
      question: "How to cancel subscription?",
      answer: "You can cancel your subscription by going to the subscription page and clicking on the cancel subscription option."
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white">
        <Image source={images.faq} className="w-80 h-80 mt-4"/>
        <View className="w-10/12">
          {faqList.map((item) => (
            <View key={item.id} className="border-b border-gray-300 py-4">
              <TouchableOpacity onPress={() => toggleExpand(item.id)} className="flex-row items-center justify-between">
                <Text className="text-xl font-bold">{item.question}</Text>
                <Image 
                  source={icons.arrowDown} 
                  className={`w-6 h-6 transform ${expandedId === item.id ? 'rotate-180' : 'rotate-0'}`} 
                />
              </TouchableOpacity>
              {expandedId === item.id && (
                <Text className="mt-2 text-base font-medium text-[#707070]">{item.answer}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FAQ;