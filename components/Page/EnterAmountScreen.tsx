/**
 * ==============================
 * ENTER AMOUNT SCREEN COMPONENT
 * ==============================
 * Screen for entering transfer amount with number pad
 */

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import components
import { NumberButton } from '../Helper/NumberButton';

// Import types and constants
import { NavigationProps } from '../../types';

export function EnterAmountScreen({
  onNavigate,
  showErrorToast,
  setTransferAmount
}: NavigationProps) {
  // ========== SAFE AREA HANDLING ==========
  const insets = useSafeAreaInsets();

  const [amount, setAmount] = useState('');
  const availableBalance = 50000; // Mock available balance

  const handleNumberPress = (num: string) => {
    if (num === '.' && amount.includes('.')) return;
    if (amount.length < 10) {
      setAmount(amount + num);
    }
  };

  const handleDelete = () => {
    setAmount(amount.slice(0, -1));
  };

  const handleContinue = () => {
    const transferAmount = parseFloat(amount);

    if (!transferAmount || transferAmount <= 0) {
      showErrorToast?.(
        'จำนวนเงินไม่ถูกต้อง',
        'กรุณาระบุจำนวนเงินที่ต้องการโอน'
      );
      return;
    }

    if (transferAmount > availableBalance) {
      showErrorToast?.(
        'ยอดเงินไม่เพียงพอ',
        `ยอดเงินคงเหลือในบัญชี ${availableBalance.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท ไม่เพียงพอสำหรับการโอน ${transferAmount.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`
      );
      return;
    }

    if (transferAmount > 50000) {
      showErrorToast?.(
        'จำนวนเงินเกินกำหนด',
        'ไม่สามารถโอนเงินเกิน 50,000 บาทต่อครั้งได้'
      );
      return;
    }

    console.log("จำนวนเงิน", transferAmount);

    // Save the transfer amount
    setTransferAmount?.(amount);
    onNavigate('confirmTransfer');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />

      <SafeAreaView className="flex-1">
        {/* Header */}
        <View
          className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100"
          style={{
            paddingTop: Math.max(insets.top, 8) + 12,
            paddingBottom: 12
          }}
        >
          <TouchableOpacity onPress={() => onNavigate('transfer')}>
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-gray-900 text-lg font-semibold">ระบุจำนวนเงิน</Text>
          <View className="w-6" />
        </View>

        <ScrollView className="flex-1 px-4 py-6" showsVerticalScrollIndicator={false}>
          {/* Recipient Card */}
          <View className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6 border border-blue-100">
            <View className="flex-row items-center mb-3">
              <View className="w-12 h-12 bg-blue-500 rounded-full items-center justify-center mr-3">
                <Text className="text-white font-bold">น</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-600 text-sm">โอนเงินไปยัง</Text>
                <Text className="text-gray-900 font-semibold text-base">นายสมชาย ใจดี</Text>
              </View>
            </View>
            <View className="bg-white rounded-xl p-3">
              <Text className="text-gray-600 text-sm">เลขบัญชี</Text>
              <Text className="text-gray-900 font-semibold">xxx-x-xx123-x</Text>
              <Text className="text-green-600 text-sm font-medium">ธนาคารกสิกรไทย</Text>
            </View>
          </View>

          {/* Amount Input Section */}
          <View className="items-center mb-8">
            <Text className="text-gray-500 text-sm mb-2">จำนวนเงิน</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-900 text-5xl font-light">
                {amount || '0'}
              </Text>
              <Text className="text-gray-500 text-2xl ml-2 font-light">บาท</Text>
            </View>
            <View className="w-full h-0.5 bg-gray-200 mt-4" />
          </View>

          {/* Balance Info */}
          <View className="bg-green-50 rounded-xl p-4 mb-6 border border-green-100">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-green-700 text-sm">ยอดเงินคงเหลือ</Text>
                <Text className="text-green-800 font-semibold text-lg">
                  ฿{availableBalance.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                </Text>
              </View>
              <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center">
                <Ionicons name="wallet" size={16} color="white" />
              </View>
            </View>
          </View>

          {/* Quick Amount Buttons */}
          <View className="mb-6">
            <Text className="text-gray-600 text-sm mb-3">จำนวนเงินแนะนำ</Text>
            <View className="flex-row flex-wrap justify-between">
              {['500', '1000', '2000', '5000'].map((quickAmount) => (
                <TouchableOpacity
                  key={quickAmount}
                  className="bg-gray-100 rounded-xl px-4 py-3 mb-2"
                  style={{ width: '48%' }}
                  onPress={() => setAmount(quickAmount)}
                >
                  <Text className="text-gray-700 text-center font-medium">
                    ฿{parseInt(quickAmount).toLocaleString('th-TH')}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Number Pad */}
          <View className="space-y-3 mb-8">
            <View className="flex-row justify-between">
              <NumberButton number="1" onPress={handleNumberPress} />
              <NumberButton number="2" onPress={handleNumberPress} />
              <NumberButton number="3" onPress={handleNumberPress} />
            </View>
            <View className="flex-row justify-between">
              <NumberButton number="4" onPress={handleNumberPress} />
              <NumberButton number="5" onPress={handleNumberPress} />
              <NumberButton number="6" onPress={handleNumberPress} />
            </View>
            <View className="flex-row justify-between">
              <NumberButton number="7" onPress={handleNumberPress} />
              <NumberButton number="8" onPress={handleNumberPress} />
              <NumberButton number="9" onPress={handleNumberPress} />
            </View>
            <View className="flex-row justify-between">
              <NumberButton number="." onPress={handleNumberPress} />
              <NumberButton number="0" onPress={handleNumberPress} />
              <TouchableOpacity
                className="w-20 h-16 bg-gray-100 rounded-xl items-center justify-center"
                onPress={handleDelete}
              >
                <Ionicons name="backspace-outline" size={24} color="#374151" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            className={`rounded-2xl py-4 ${amount ? 'bg-green-500 active:bg-green-600' : 'bg-gray-300'}`}
            disabled={!amount}
            onPress={handleContinue}
            style={{ marginBottom: Math.max(insets.bottom, 16) }}
          >
            <Text className={`text-center font-semibold text-lg ${amount ? 'text-white' : 'text-gray-500'}`}>
              ดำเนินการต่อ
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
