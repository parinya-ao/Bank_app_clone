/**
 * ====import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';========================
 * ACCOUNT SCREEN COMPONENT
 * ==============================
 * Main account over          <TouchableOpacity
            className="items-center"
            onPress={() => onNavigate('enterAmount')}
          > screen showing account balance, transaction options, and services
 * Displays the iconic circular balance indicator matching the K+ app design
 */

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

// Import components
import { BottomNavigation } from '../Helper/BottomNavigation';
import { Header } from './Header';

// Import types and constants
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { USER_ACCOUNTS } from '../../constants';
import { NavigationProps } from '../../types';

export function AccountScreen({
  onNavigate,
  showSuccessToast,
  showErrorToast
}: NavigationProps) {
  // ========== SAFE AREA HANDLING ==========
  const insets = useSafeAreaInsets();

  // ========== HELPER FUNCTIONS ==========
  const formatBalance = (balance: number): string => {
    return balance.toLocaleString('th-TH', { minimumFractionDigits: 2 });
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleAccountInfoPress = () => {
    showSuccessToast?.(
      'ข้อมูลบัญชี',
      'ข้อมูลบัญชีได้รับการอัปเดตล่าสุดเมื่อ ' + getCurrentTime() + ' น.'
    );
  };

  const handleServicePress = (serviceName: string) => {
    // Simulate some services being temporarily unavailable
    const unavailableServices = ['Statement', 'สืบเสาะ'];

    if (unavailableServices.includes(serviceName)) {
      showErrorToast?.(
        'บริการไม่พร้อมใช้งาน',
        `ขออภัยในขณะนี้บริการ${serviceName}ไม่พร้อมใช้งานชั่วคราว กรุณาลองใหม่อีกครั้งในภายหลัง`
      );
    } else {
      showSuccessToast?.(
        'เข้าสู่บริการ',
        `กำลังเปิดบริการ${serviceName}...`
      );
    }
  };

  // ========== RENDER ==========
  return (
    <View className="flex-1 bg-slate-700">
      {/* Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#334155"
        translucent={false}
      />

      <SafeAreaView className="flex-1">
        {/* Header with proper safe area handling */}
        <View
          className="bg-slate-700"
          style={{
            paddingTop: Math.max(insets.top, 8),
            paddingBottom: 8
          }}
        >
          <Header />
        </View>

        {/* Account Selector */}
        <View className="px-4 py-2">
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-white font-semibold text-base mr-2">
              บัญชีของดิฉัน
            </Text>
            <Ionicons name="chevron-down" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-gray-400 text-sm mt-1">
            {USER_ACCOUNTS[0].accountNumber}
          </Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          {/* Main Balance Circle */}
          <View className="items-center py-8">
            <TouchableOpacity
              className="w-64 h-64 rounded-full border-2 border-green-400 items-center justify-center relative bg-slate-700/50 active:bg-slate-600/50"
              onPress={handleAccountInfoPress}
            >
              <Text className="text-gray-400 text-sm mb-2">ยอดเงินที่ใช้ได้</Text>
              <Text className="text-white text-3xl font-bold">
                330.66
              </Text>

              {/* Settings icon */}
              <TouchableOpacity
                className="absolute bottom-8 right-8 w-10 h-10 bg-gray-600 rounded-full items-center justify-center"
                onPress={(e) => {
                  e.stopPropagation();
                  handleServicePress('ตั้งค่าบัญชี');
                }}
              >
                <Ionicons name="settings" size={20} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>

            {/* Last update time */}
            <View className="flex-row items-center mt-4">
              <Ionicons name="refresh" size={16} color="#9ca3af" />
              <Text className="text-gray-400 ml-2 text-sm">
                ข้อมูล ณ เวลา {getCurrentTime()} น.
              </Text>
            </View>

            {/* Pagination dots */}
            <View className="flex-row mt-4 space-x-2">
              <View className="w-2 h-2 bg-white rounded-full" />
              <View className="w-2 h-2 bg-gray-600 rounded-full" />
              <View className="w-2 h-2 bg-gray-600 rounded-full" />
              <View className="w-2 h-2 bg-gray-600 rounded-full" />
            </View>
          </View>

          {/* Quick Actions - Row 1 */}
          <View className="flex-row justify-between mb-8">
            <TouchableOpacity
              className="items-center"
              onPress={() => onNavigate('transfer')}
            >
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="arrow-forward-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">โอนเงิน</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={() => handleServicePress('เติมเงิน')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="arrow-down-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">เติมเงิน</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={() => handleServicePress('จ่ายบิล')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="receipt-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">จ่ายบิล</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={() => handleServicePress('ถอนเงิน')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="card-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">ถอนเงิน</Text>
            </TouchableOpacity>
          </View>

          {/* Quick Actions - Row 2 */}
          <View className="flex-row justify-between mb-8">
            <TouchableOpacity className="items-center" onPress={() => handleServicePress('Statement')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="document-text-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">Statement</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={() => handleServicePress('สืบเสาะ/บัตรเครดิต')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="search-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium leading-3">สืบเสาะ/{'\n'}บัตรเครดิต</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={() => handleServicePress('ลงทุน')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="trending-up-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">ลงทุน</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center" onPress={() => handleServicePress('ติดต่อ/บริการ')}>
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="call-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium leading-3">ติดต่อ{'\n'}บริการ</Text>
            </TouchableOpacity>
          </View>

          {/* Other Services Section */}
          <View className="border-l-4 border-green-400 pl-3 mb-4">
            <Text className="text-white text-lg font-semibold">บริการแนะนำ</Text>
          </View>

          {/* Service Promotion Card */}
          <View className="bg-white rounded-xl p-4 mb-6 shadow-lg">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-green-500 rounded-xl items-center justify-center mr-3">
                <Text className="text-white text-lg font-bold">💳</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold text-base mb-1">
                  ปริยายจับ พิซซ่า ปล่อยใด้ วิท...
                </Text>
                <Text className="text-gray-600 text-sm">
                  เร็วไป่เก็บตัวจปชได้ขู่พิไร้เอาเสิร์ฟสีให่ที่ได้ ลิรหมคโครสิวาร์เตรีย...
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </View>
          </View>

          {/* Additional spacing for scroll with safe area */}
          <View style={{ height: insets.bottom + 16 }} />
        </ScrollView>

        {/* Bottom Navigation with safe area */}
        <View style={{ paddingBottom: Math.max(insets.bottom, 8) }}>
          <BottomNavigation currentTab="transaction" onTabPress={onNavigate} />
        </View>
      </SafeAreaView>
    </View>
  );
}
