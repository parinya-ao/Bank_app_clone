/**
 * ==============================
 * ENTER AMOUNT SCREEN COMPONENT
 * ==============================
 * Screen for entering transfer amount with number pad
 */

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import components
import { NumberButton } from '../Helper/NumberButton';

// Import types and constants
import { NavigationProps } from '../../types';

export function EnterAmountScreen({
  onNavigate,
  showErrorToast,
  setTransferAmount
}: NavigationProps) {
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

    // Save the transfer amount
    setTransferAmount?.(amount);
    onNavigate('confirmTransfer');
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => onNavigate('transfer')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold">โอนเงิน</Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Recipient Info */}
        <View className="bg-gray-800 rounded-xl p-4 mb-6">
          <Text className="text-white font-semibold mb-2">ผู้รับโอน</Text>
          <Text className="text-white text-lg">นายสมชาย ใจดี</Text>
          <Text className="text-gray-400">xxx-x-xx123-x (กสิกรไทย)</Text>
        </View>

        {/* Amount Display */}
        <View className="items-center mb-6">
          <Text className="text-gray-400 mb-2">จำนวนเงิน (บาท)</Text>
          <Text className="text-white text-4xl font-bold">
            {amount || '0'}
          </Text>
          <Text className="text-gray-400 text-sm mt-2">
            ยอดเงินคงเหลือ: {availableBalance.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท
          </Text>
        </View>

        {/* Number Pad */}
        <View className="space-y-4 mb-8">
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
              className="w-20 h-16 bg-gray-800 rounded-xl items-center justify-center"
              onPress={handleDelete}
            >
              <Ionicons name="backspace-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          className={`rounded-xl py-4 ${amount ? 'bg-green-500 active:bg-green-600' : 'bg-gray-600'}`}
          disabled={!amount}
          onPress={handleContinue}
        >
          <Text className="text-white text-center font-semibold text-lg">ดำเนินการต่อ</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
