/**
 * ==============================
 * CONFIRM TRANSFER SCREEN COMPONENT
 * ==============================
 * Screen for confirming transfer details and PIN entry
 */

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import types and constants
import { NavigationProps } from '../../types';

export function ConfirmTransferScreen({
  onNavigate,
  showSuccessToast,
  showErrorToast,
  transferAmount = '0'
}: NavigationProps) {
  // ========== SAFE AREA HANDLING ==========
  const insets = useSafeAreaInsets();

  const [showFraudWarning, setShowFraudWarning] = useState(false);

  const handleConfirmTransfer = () => {
    // Simulate random success/failure (20% failure rate)
    const isSuccess = Math.random() > 0.2;

    const formattedAmount = parseFloat(transferAmount).toLocaleString('th-TH', { minimumFractionDigits: 2 });

    if (isSuccess) {
      showSuccessToast?.(
        'โอนเงินสำเร็จ!',
        `โอนเงินจำนวน ${formattedAmount} บาท ไปยังนายสมชาย ใจดี เรียบร้อยแล้ว`
      );
      onNavigate('home');
    } else {
      // Show fraud warning screen
      setShowFraudWarning(true);
    }
  };

  // Fraud Warning Screen
  if (showFraudWarning) {
    return (
      <View className="flex-1 bg-red-600">
        {/* Status Bar */}
        <StatusBar
          barStyle="light-content"
          backgroundColor="#dc2626"
          translucent={false}
        />

        <SafeAreaView className="flex-1">
          <View
            className="flex-1 px-6 py-8 justify-center items-center"
            style={{ paddingTop: Math.max(insets.top, 8) + 32 }}
          >
            {/* Warning Icon */}
            <View className="w-24 h-24 bg-red-800 rounded-full items-center justify-center mb-6">
              <Ionicons name="warning" size={48} color="white" />
            </View>

            {/* Warning Title */}
            <Text className="text-white text-2xl font-bold text-center mb-4">
              ⚠️ คำเตือนความปลอดภัย
            </Text>

            {/* Warning Message */}
            <View className="bg-red-800/50 rounded-xl p-6 mb-8">
              <Text className="text-white text-lg font-semibold text-center mb-4">
                บัญชีนี้ตรวจสอบแล้วว่าเป็น บช ม้า
              </Text>
              <Text className="text-white text-center leading-6 mb-4">
                ระบบตรวจพบว่าบัญชีปลายทางที่คุณกำลังจะโอนเงินไปนั้น
                มีความเสี่ยงสูงที่จะเป็นบัญชีมิจฉาชีพ
              </Text>
              <Text className="text-white text-center leading-6 mb-4">
                • บัญชีนี้อาจถูกใช้ในการหลอกลวง
              </Text>
              <Text className="text-white text-center leading-6 mb-4">
                • มีรายงานการใช้งานผิดปกติ
              </Text>
              <Text className="text-white text-center leading-6">
                เพื่อความปลอดภัยของคุณ ธนาคารขอแนะนำให้ยกเลิกการทำรายการนี้
              </Text>
            </View>

            {/* Action Buttons */}
            <View className="w-full space-y-4">
              <TouchableOpacity
                className="bg-white rounded-xl py-4 px-6"
                onPress={() => onNavigate('transfer')}
              >
                <Text className="text-red-600 text-center font-bold text-lg">
                  ✓ ยกเลิกการโอน (แนะนำ)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-red-800 rounded-xl py-4 px-6 border-2 border-red-400"
                onPress={() => setShowFraudWarning(false)}
              >
                <Text className="text-white text-center font-semibold text-lg">
                  ← กลับไปแก้ไข
                </Text>
              </TouchableOpacity>
            </View>

            {/* Emergency Contact */}
            <View className="mt-8 bg-red-800/30 rounded-xl p-4">
              <Text className="text-white text-center text-sm">
                หากถูกหลอกลวงแล้ว โทร. 1212 ตลอด 24 ชม.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-700">
      {/* Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#334155"
        translucent={false}
      />

      <SafeAreaView className="flex-1">
        <View
          className="flex-row items-center justify-between px-4 py-3 bg-slate-700"
          style={{
            paddingTop: Math.max(insets.top, 8) + 12,
            paddingBottom: 12
          }}
        >
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
                  <Text className="text-white text-lg font-semibold">
                    {parseFloat(transferAmount).toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท
                  </Text>
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
            className="bg-green-500 active:bg-green-600 rounded-xl py-4 mb-4"
            onPress={handleConfirmTransfer}
          >
            <Text className="text-white text-center font-semibold text-lg">
              ยืนยันการโอน
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-600 rounded-xl py-4"
            onPress={() => onNavigate('home')}
            style={{ marginBottom: Math.max(insets.bottom, 16) }}
          >
            <Text className="text-white text-center font-semibold text-lg">ยกเลิก</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
