/**
 * ==============================
 * ACCOUNT SCREEN COMPONENT
 * ==============================
 * Main account overview screen showing account balance, transaction options, and services
 * Displays the iconic circular balance indicator matching the K+ app design
 */

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import components
import { BottomNavigation } from '../Helper/BottomNavigation';
import { ServiceButton } from '../Helper/ServiceButton';
import { Header } from './Header';

// Import types and constants
import { APP_CONFIG, QUICK_SERVICES, USER_ACCOUNTS } from '../../constants';
import { NavigationProps } from '../../types';

export function AccountScreen({
  onNavigate,
  showSuccessToast,
  showErrorToast
}: NavigationProps) {
  // ========== HELPER FUNCTIONS ==========
  const formatBalance = (balance: number): string => {
    return balance.toLocaleString('th-TH', { minimumFractionDigits: 2 });
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    return `${ now.getHours().toString().padStart(2, '0') }:${ now.getMinutes().toString().padStart(2, '0') }`;
  };

  const handleAccountInfoPress = () => {
    showSuccessToast?.(
      'ข้อมูลบัญชี',
      'ข้อมูลบัญชีได้รับการอัปเดตล่าสุดเมื่อ ' + getCurrentTime() + ' น.'
    );
  };

  const handleServicePress = (serviceName: string) => {
    // Simulate some services being temporarily unavailable
    const unavailableServices = ['ชำระค่าน้ำ', 'ชำระค่าไฟ'];

    if (unavailableServices.includes(serviceName)) {
      showErrorToast?.(
        'บริการไม่พร้อมใช้งาน',
        `ขออภัยในขณะนี้บริการ${ serviceName }ไม่พร้อมใช้งานชั่วคราว กรุณาลองใหม่อีกครั้งในภายหลัง`
      );
    } else {
      showSuccessToast?.(
        'เข้าสู่บริการ',
        `กำลังเปิดบริการ${ serviceName }...`
      );
    }
  };

  // ========== RENDER ==========
  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      {/* Header */}
      <Header />

      {/* Account Selector */}
      <View className="px-4 py-2">
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-white font-semibold text-base mr-2">
            {APP_CONFIG.user.name}
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
              {formatBalance(USER_ACCOUNTS[0].balance)}
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
            <View className="w-2 h-2 bg-gray-600 rounded-full" />
          </View>
        </View>

        {/* Quick Actions - Row 1 */}
        <View className="flex-row justify-between mb-8">
          {QUICK_SERVICES.accountRow1.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              label={service.label}
              onPress={() => {
                if (service.label === 'โอนเงิน') {
                  onNavigate('transfer');
                } else {
                  handleServicePress(service.label);
                }
              }}
            />
          ))}
        </View>

        {/* Quick Actions - Row 2 */}
        <View className="flex-row justify-between mb-8">
          {QUICK_SERVICES.accountRow2.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              label={service.label}
              onPress={() => handleServicePress(service.label)}
            />
          ))}
        </View>

        {/* Other Services Section */}
        <View className="border-l-4 border-green-400 pl-3 mb-4">
          <Text className="text-white text-lg font-semibold">บริการอื่น</Text>
        </View>

        {/* Other Services Grid */}
        <View className="flex-row justify-between mb-6">
          {QUICK_SERVICES.others.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              label={service.label}
              onPress={() => handleServicePress(service.label)}
            />
          ))}
        </View>

        {/* Additional spacing for scroll */}
        <View className="h-4" />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation currentTab="transaction" onTabPress={onNavigate} />
    </SafeAreaView>
  );
}
