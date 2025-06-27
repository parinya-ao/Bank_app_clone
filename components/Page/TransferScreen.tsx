/**
 * ==============================
 * TRANSFER SCREEN COMPONENT
 * ==============================
 * K PLUS Style Transfer Screen with complete UI/UX replication
 */

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import types and constants
import { RECENT_RECIPIENTS, USER_ACCOUNTS } from '../../constants';
import { NavigationProps } from '../../types';

export function TransferScreen({
  onNavigate,
  showErrorToast
}: NavigationProps) {
  // ========== STATE MANAGEMENT ==========
  const [activeTab, setActiveTab] = useState<'immediate' | 'scheduled'>('immediate');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAccount, setSelectedAccount] = useState(USER_ACCOUNTS[0]);

  // ========== SAFE AREA HANDLING ==========
  const insets = useSafeAreaInsets();

  const handleTransferOptionPress = () => {
    // Simulate system check (5% chance of system error)
    const systemAvailable = Math.random() > 0.05;

    if (systemAvailable) {
      onNavigate('enterAmount');
    } else {
      showErrorToast?.(
        'ระบบไม่พร้อมใช้งาน',
        'ขออภัยในขณะนี้ระบบโอนเงินไม่พร้อมใช้งาน กรุณาลองใหม่อีกครั้งหรือติดต่อศูนย์บริการลูกค้า'
      );
    }
  };

  const filteredRecipients = RECENT_RECIPIENTS.filter(recipient =>
    recipient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipient.accountNumber.includes(searchQuery)
  );

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
          <TouchableOpacity onPress={() => onNavigate('home')}>
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-gray-900 text-lg font-semibold">โอนเงิน</Text>
          <TouchableOpacity>
            <Ionicons name="help-circle-outline" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Account Source Selection */}
          <View className="px-4 py-4 bg-white">
            <Text className="text-gray-500 text-sm mb-2">จาก</Text>
            <TouchableOpacity
              className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 shadow-sm border border-green-200"
              onPress={() => onNavigate('selectAccount')}
            >
              <View className="flex-row items-center">
                <View className="w-14 h-14 bg-green-500 rounded-2xl items-center justify-center mr-4">
                  <Ionicons name="card" size={24} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="text-green-700 font-bold text-base mb-1">{selectedAccount.title}</Text>
                  <Text className="text-gray-600 text-sm mb-1">{selectedAccount.accountNumber}</Text>
                  <Text className="text-gray-900 font-semibold text-base">
                    ฿{selectedAccount.balance.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                  </Text>
                </View>
                <View className="items-center">
                  <Ionicons name="chevron-down" size={20} color="#16a34a" />
                  <Text className="text-green-600 text-xs mt-1">เปลี่ยน</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Transfer Type Tabs */}
          <View className="px-4 py-2 bg-gray-50">
            <View className="flex-row bg-white rounded-xl shadow-sm overflow-hidden">
              <TouchableOpacity
                className={`flex-1 py-3 px-4 ${activeTab === 'immediate' ? 'bg-green-500' : 'bg-white'}`}
                onPress={() => setActiveTab('immediate')}
              >
                <Text className={`text-center font-semibold ${activeTab === 'immediate' ? 'text-white' : 'text-gray-600'}`}>
                  โอนทันที
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 py-3 px-4 ${activeTab === 'scheduled' ? 'bg-green-500' : 'bg-white'}`}
                onPress={() => setActiveTab('scheduled')}
              >
                <Text className={`text-center font-semibold ${activeTab === 'scheduled' ? 'text-white' : 'text-gray-600'}`}>
                  ตั้งโอนล่วงหน้า
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View className="px-4 py-3 bg-gray-50">
            <View className="flex-row items-center bg-white rounded-xl px-4 py-3 shadow-sm">
              <Ionicons name="search" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-3 text-gray-900"
                placeholder="ค้นหาชื่อหรือเลขบัญชี"
                placeholderTextColor="#9ca3af"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery ? (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Ionicons name="close-circle" size={20} color="#9ca3af" />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          {/* Quick Transfer Options */}
          <View className="px-4 py-3 bg-white">
            <Text className="text-gray-900 font-semibold text-base mb-3">โอนเงินด่วน</Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="items-center flex-1"
                onPress={() => onNavigate('enterAmount')}
              >
                <View className="w-16 h-16 bg-blue-500 rounded-2xl items-center justify-center mb-2">
                  <Ionicons name="person-add" size={24} color="white" />
                </View>
                <Text className="text-gray-700 text-xs text-center">บัญชีใหม่</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center flex-1"
                onPress={() => onNavigate('enterAmount')}
              >
                <View className="w-16 h-16 bg-orange-500 rounded-2xl items-center justify-center mb-2">
                  <Ionicons name="qr-code" size={24} color="white" />
                </View>
                <Text className="text-gray-700 text-xs text-center">QR Code</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center flex-1"
                onPress={() => onNavigate('enterAmount')}
              >
                <View className="w-16 h-16 bg-purple-500 rounded-2xl items-center justify-center mb-2">
                  <Ionicons name="phone-portrait" size={24} color="white" />
                </View>
                <Text className="text-gray-700 text-xs text-center">เบอร์โทร</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center flex-1"
                onPress={() => onNavigate('enterAmount')}
              >
                <View className="w-16 h-16 bg-red-500 rounded-2xl items-center justify-center mb-2">
                  <Ionicons name="card" size={24} color="white" />
                </View>
                <Text className="text-gray-700 text-xs text-center">PromptPay</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Recipients Section */}
          <View className="px-4 py-3 bg-white border-t border-gray-100">
            <Text className="text-gray-900 font-semibold text-base mb-3">รายการโปรด</Text>

            {filteredRecipients.length === 0 ? (
              <View className="items-center py-8">
                <Ionicons name="heart-outline" size={48} color="#d1d5db" />
                <Text className="text-gray-400 text-center mt-2">
                  {searchQuery ? 'ไม่พบรายการที่ค้นหา' : 'ยังไม่มีรายการโปรด'}
                </Text>
              </View>
            ) : (
              filteredRecipients.map((recipient) => (
                <TouchableOpacity
                  key={recipient.id}
                  className="flex-row items-center py-4 border-b border-gray-50"
                  onPress={() => onNavigate('enterAmount')}
                >
                  <View className="w-12 h-12 rounded-full items-center justify-center mr-4 bg-gradient-to-br from-blue-400 to-blue-600">
                    <Text className="text-white font-bold text-sm">
                      {recipient.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>

                  <View className="flex-1">
                    <Text className="text-gray-900 font-semibold text-base mb-1">{recipient.name}</Text>
                    <Text className="text-gray-500 text-sm mb-1">{recipient.bankName}</Text>
                    <Text className="text-gray-400 text-sm">{recipient.accountNumber}</Text>
                  </View>

                  <View className="items-end">
                    <TouchableOpacity className="w-8 h-8 items-center justify-center">
                      <Ionicons name="heart" size={20} color="#ef4444" />
                    </TouchableOpacity>
                    <Text className="text-gray-400 text-xs mt-1">โปรด</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>

          {/* Information Banner */}
          <View className="mx-4 my-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-100">
            <View className="flex-row items-start">
              <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center mr-3">
                <Ionicons name="information" size={16} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-green-800 font-semibold text-sm mb-1">ข้อมูลการโอนเงิน</Text>
                <Text className="text-green-700 text-xs leading-5">
                  • โอนภายในกสิกรไทย ฟรีค่าธรรมเนียม 24 ชั่วโมง{'\n'}
                  • โอนต่างธนาคาร ค่าธรรมเนียม 15 บาท{'\n'}
                  • ตรวจสอบข้อมูลผู้รับก่อนยืนยัน
                </Text>
              </View>
            </View>
          </View>

          {/* Bottom Spacing */}
          <View style={{ height: Math.max(insets.bottom, 16) + 80 }} />
        </ScrollView>

        {/* Fixed Bottom Button */}
        <View
          className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3"
          style={{
            paddingBottom: Math.max(insets.bottom, 16)
          }}
        >
          <TouchableOpacity
            className="bg-green-500 rounded-2xl py-4 px-6 shadow-lg"
            onPress={handleTransferOptionPress}
          >
            <Text className="text-white font-bold text-center text-base">เลือกผู้รับโอน</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
