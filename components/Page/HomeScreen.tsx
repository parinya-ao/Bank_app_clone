/**
 * ==============================
 * HOME SCREEN COMPONENT
 * ==============================
 * Main dashboard screen showing account overview, quick services, and promotional content
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import components
import { BottomNavigation } from '../Helper/BottomNavigation';
import { ServiceButton } from '../Helper/ServiceButton';
import { ServiceCard } from '../Helper/ServiceCard';
import { Header } from './Header';

// Import types and constants
import { QUICK_SERVICES, SERVICE_CARDS, USER_ACCOUNTS } from '../../constants';
import { NavigationProps } from '../../types';

export function HomeScreen({
  onNavigate,
  showSuccessToast,
  showInfoToast
}: NavigationProps) {
  // ========== HELPER FUNCTIONS ==========
  const formatBalance = (balance: number): string => {
    return balance.toLocaleString('th-TH', { minimumFractionDigits: 2 });
  };

  const handleServicePress = (serviceName: string, action: () => void) => {
    showSuccessToast?.(
      'เข้าสู่บริการ',
      `กำลังเปิดบริการ${ serviceName }...`
    );
    setTimeout(action, 800);
  };

  // Show welcome message on component mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      showInfoToast?.(
        'ยินดีต้อนรับสู่ K+',
        'ข้อมูลบัญชีของคุณได้รับการอัปเดตแล้ว ระบบพร้อมให้บริการ'
      );
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ========== RENDER ==========
  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      {/* Header */}
      <Header />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Important Today Section */}
        <View className="border-l-4 border-green-400 pl-3 mb-6">
          <Text className="text-white text-lg font-semibold">เรื่องสำคัญวันนี้</Text>
        </View>

        {/* K+ Welcome Card */}
        <View className="bg-white rounded-xl p-4 mb-6 flex-row items-center shadow-lg">
          <View className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl items-center justify-center mr-4">
            <Text className="text-white text-xl font-bold">K+</Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-800 font-semibold text-lg mb-1">
              K+ พร้อมให้บริการ
            </Text>
            <Text className="text-gray-600 leading-5">
              ใช้งาน ปลอดภัย รู้ใจทุกไลฟ์สไตล์
            </Text>
          </View>
        </View>

        {/* Quick Services Section */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="border-l-4 border-green-400 pl-3">
            <Text className="text-white text-lg font-semibold">ธุรกรรมด่วน</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-white text-sm">แก้ไข {'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Service Buttons */}
        <View className="flex-row justify-between mb-8">
          {QUICK_SERVICES.main.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              label={service.label}
              onPress={() => {
                if (service.label === 'โอนเงิน') {
                  handleServicePress('โอนเงิน', () => onNavigate('transfer'));
                } else if (service.label === 'ถอนเงิน') {
                  handleServicePress('ถอนเงิน', () => onNavigate('account'));
                } else {
                  handleServicePress(service.label, () => {
                    console.log(`${ service.label } pressed`);
                  });
                }
              }}
            />
          ))}
        </View>

        {/* Account Balance Section */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="border-l-4 border-green-400 pl-3">
            <Text className="text-white text-lg font-semibold">เช็คยอดเงินกันก่อน</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-white text-sm">ตั้งค่า {'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Account Card */}
        <TouchableOpacity
          className="bg-white rounded-xl p-4 mb-6 shadow-lg"
          onPress={() => onNavigate('account')}
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-gray-800 font-semibold text-lg mb-1">บัญชี</Text>
              <Text className="text-gray-600 mb-2">{USER_ACCOUNTS[0].accountNumber}</Text>
            </View>
            <View className="items-end">
              <Text className="text-gray-400 text-lg mb-2">XX.XX</Text>
              <View className="flex-row items-center">
                <Text className="text-green-500 mr-2 font-medium">ดูยอดเงิน</Text>
                <Ionicons name="eye-outline" size={16} color="#10b981" />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Recommended Services Section */}
        <View className="border-l-4 border-green-400 pl-3 mb-4">
          <Text className="text-white text-lg font-semibold">บริการแนะนำ</Text>
        </View>

        {/* Service Cards Grid */}
        <View className="flex-row justify-between mb-6">
          {SERVICE_CARDS.slice(0, 2).map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              iconColor={card.iconColor}
              onPress={() => console.log(`${ card.title } pressed`)}
            />
          ))}
        </View>

        {/* Additional Services */}
        <View className="flex-row justify-between mb-6">
          <ServiceCard
            title="ลงทุน"
            subtitle="กองทุน หุ้น ออมเงิน ครบครัน"
            icon="trending-up"
            iconColor="#f59e0b"
          />
          <ServiceCard
            title="ประกัน"
            subtitle="ป้องกันความเสี่ยง คุ้มครองชีวิต"
            icon="shield-checkmark"
            iconColor="#ef4444"
          />
        </View>

        {/* Additional spacing for scroll */}
        <View className="h-4" />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation currentTab="home" onTabPress={onNavigate} />
    </SafeAreaView>
  );
}
