/**
 * ==============================
 * CONFIRM TRANSFER SCREEN COMPONENT
 * ==============================
 * Screen for confirming transfer details and PIN entry
 */

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import types and constants
import { NavigationProps } from '../../types';

export function ConfirmTransferScreen({ onNavigate }: NavigationProps) {
  const [pinEntered, setPinEntered] = useState(4); // Mock PIN entry progress
  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => onNavigate('enterAmount')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold">ยืนยันการโอน</Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Transfer Summary */}
        <View className="bg-gray-800 rounded-xl p-4 mb-6">
          <Text className="text-white font-semibold mb-4">สรุปการโอนเงิน</Text>

          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">จาก</Text>
              <Text className="text-white">xxx-x-x8888-x</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">ไปยัง</Text>
              <Text className="text-white">นายสมชาย ใจดี</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">บัญชีปลายทาง</Text>
              <Text className="text-white">xxx-x-xx123-x</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">ธนาคาร</Text>
              <Text className="text-white">กสิกรไทย</Text>
            </View>
            <View className="border-t border-gray-600 pt-3">
              <View className="flex-row justify-between">
                <Text className="text-gray-400">จำนวนเงิน</Text>
                <Text className="text-white text-lg font-semibold">1,000.00 บาท</Text>
              </View>
            </View>
          </View>
        </View>

        {/* PIN Entry */}
        <View className="bg-gray-800 rounded-xl p-4 mb-6">
          <Text className="text-white font-semibold mb-4">ยืนยันด้วย PIN</Text>
          <View className="flex-row justify-center space-x-4">
            <View className="w-4 h-4 bg-green-500 rounded-full" />
            <View className="w-4 h-4 bg-green-500 rounded-full" />
            <View className="w-4 h-4 bg-green-500 rounded-full" />
            <View className="w-4 h-4 bg-green-500 rounded-full" />
            <View className="w-4 h-4 bg-gray-600 rounded-full" />
            <View className="w-4 h-4 bg-gray-600 rounded-full" />
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          className="bg-green-500 rounded-xl py-4 mb-4"
          onPress={() => {
            // Show success and go back to home
            setTimeout(() => onNavigate('home'), 1000);
          }}
        >
          <Text className="text-white text-center font-semibold text-lg">ยืนยันการโอน</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-600 rounded-xl py-4"
          onPress={() => onNavigate('home')}
        >
          <Text className="text-white text-center font-semibold text-lg">ยกเลิก</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
