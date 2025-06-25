/**
 * ==============================
 * TRANSFER SCREEN COMPONENT
 * ==============================
 * Screen for selecting transfer options and viewing recent transfers
 */

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import components

// Import types and constants
import { NavigationProps } from '../../types';

export function TransferScreen({
  onNavigate,
  showErrorToast
}: NavigationProps) {
  const handleTransferOptionPress = () => {
    // Simulate system check (5% chance of system error)
    const systemAvailable = Math.random() > 0.05;

    if (systemAvailable) {
      onNavigate('enterAmount');
    } else {
      showErrorToast?.(
        'ระบบไม่พร้อมใช้งาน',
        'ขออพยในขณะนี้ระบบโอนเงินไม่พร้อมใช้งาน กรุณาลองใหม่อีกครั้งหรือติดต่อศูนย์บริการลูกค้า'
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      {/* Header with back button */}
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold">โอนเงิน</Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Account Source Selection */}
        <View className="mb-6">
          <Text className="text-gray-400 text-sm mb-2">จาก:</Text>
          <TouchableOpacity className="bg-gray-800 rounded-xl p-4 flex-row items-center">
            <View className="w-12 h-12 bg-gray-600 rounded-full items-center justify-center mr-3">
              <Ionicons name="card-outline" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-green-400 font-semibold text-base">บัญชี</Text>
              <Text className="text-white text-sm">xxx-x-x2450-x</Text>
              <Text className="text-white text-sm">330.66 บาท</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="refresh" size={16} color="#9ca3af" />
              {/* <Text className="text-gray-400 ml-1 text-xs">ข้อมูล ณ เวลา 16:57 น.</Text> */}
            </View>
          </TouchableOpacity>
        </View>

        {/* Transfer Options Tabs */}
        <View className="flex-row mb-4">
          <TouchableOpacity className="flex-1 mr-2">
            <View className="bg-white rounded-lg py-3 px-4 border-b-2 border-green-400">
              <Text className="text-gray-800 font-semibold text-center">โอนเงิน</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 ml-2">
            <View className="bg-gray-600 rounded-lg py-3 px-4">
              <Text className="text-gray-300 text-center">ตั้งโอนล่วงหน้า</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Transfer Section */}
        <Text className="text-white text-sm mb-3">โอนล่าสุด: รายการโปรด</Text>

        {/* Recent Transfer Item */}
        <TouchableOpacity
          className="bg-white rounded-xl p-4 mb-4"
          onPress={() => onNavigate('enterAmount')}
        >
          <View className="flex-row items-center">
            <View className="w-12 h-12 rounded-full items-center justify-center mr-3" style={{ backgroundColor: '#4285f4' }}>
              <Ionicons name="diamond-outline" size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-green-500 font-semibold text-base">บัญชี</Text>
              <Text className="text-gray-600 text-sm">ธนาคาร</Text>
              <Text className="text-gray-600 text-sm">123-456-789</Text>
            </View>
          </View>

          <View className="mt-3 pt-3 border-t border-gray-200">
            <Text className="text-gray-500 text-sm mb-1">จำนวน:</Text>
            <Text className="text-gray-800 text-lg font-semibold">0.00 บาท</Text>
          </View>
        </TouchableOpacity>

        {/* Information Section */}
        <View className="bg-gray-800/50 rounded-xl p-4 mb-6">
          <Text className="text-white font-semibold text-sm mb-2">ประเภทระบบการโอนเงินภายในกลุ่ม</Text>
          <Text className="text-gray-300 text-xs leading-5">
            เว็บไซต์ชื่นรักช่วยคุณระบบการจ่อวนี่วนั่ละรุ่มการ
            สอมไป็วใหม่ระภาชใเสนไปน
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-4 mb-6">
          <TouchableOpacity className="bg-orange-500 rounded-full py-3 px-6 flex-row items-center">
            <Ionicons name="close" size={20} color="white" />
            <Text className="text-white font-semibold ml-2">ยกเลิก</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-green-500 rounded-full py-3 px-6 flex-row items-center flex-1"
            onPress={() => onNavigate('enterAmount')}
          >
            <Text className="text-white font-semibold flex-1 text-center">ต่อไป</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Additional spacing for scroll */}
        <View className="h-4" />
      </ScrollView>
    </SafeAreaView>
  );
}
