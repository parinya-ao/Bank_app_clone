/**
 * ==============================
 * HOME SCR          <TouchableOpacity
            className="items-center"
            onPress={() => handleServicePress('โอนเงิน', () => onNavigate('enterAmount'))}
          >COMPONENT
 * ==============================
 * Main dashboard screen showing account overview, quick services, and promotional content
 */

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import components
import { BottomNavigation } from '../Helper/BottomNavigation';
import { Header } from './Header';

// Import types and constants
import { USER_ACCOUNTS } from '../../constants';
import { NavigationProps } from '../../types';

export function HomeScreen({
  onNavigate,
  showSuccessToast,
  showInfoToast
}: NavigationProps) {
  // ========== SAFE AREA HANDLING ==========
  const insets = useSafeAreaInsets();

  // ========== HELPER FUNCTIONS ==========
  const handleServicePress = (serviceName: string, action: () => void) => {
    showSuccessToast?.(
      'เข้าสู่บริการ',
      `กำลังเปิดบริการ${serviceName}...`
    );
    action();
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

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 100 }} // Extra space for bottom navigation
        >
          {/* Important Today Section */}
          <View className="border-l-4 border-green-400 pl-3 mb-4">
            <Text className="text-white text-lg font-semibold">เมนูลัด</Text>
            <TouchableOpacity className="absolute right-0 top-0">
              <Text className="text-white text-sm">ดูที่หมด {'>'}</Text>
            </TouchableOpacity>
          </View>

          {/* Main Service Buttons */}
          <View className="flex-row justify-between mb-6 px-2">
            <TouchableOpacity
              className="items-center"
              onPress={() => handleServicePress('โอนเงิน', () => onNavigate('transfer'))}
            >
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="arrow-forward-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">โอนเงิน</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center">
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="arrow-down-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">เติมเงิน</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center">
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="receipt-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">จ่ายบิล</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="items-center"
              onPress={() => handleServicePress('ถอนเงิน', () => onNavigate('account'))}
            >
              <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
                <Ionicons name="card-outline" size={24} color="white" />
              </View>
              <Text className="text-white text-xs text-center font-medium">ถอนเงิน</Text>
            </TouchableOpacity>
          </View>

          {/* Account Balance Section */}
          <View className="border-l-4 border-green-400 pl-3 mb-4">
            <Text className="text-white text-lg font-semibold">เช็คยอดเงินกันก่อน</Text>
            <TouchableOpacity className="absolute right-0 top-0">
              <Text className="text-white text-sm">ดูที่หมด {'>'}</Text>
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

          {/* Service Cards Section */}
          <View className="border-l-4 border-green-400 pl-3 mb-4">
            <Text className="text-white text-lg font-semibold">รายการโปรด</Text>
            <TouchableOpacity className="absolute right-0 top-0">
              <Text className="text-white text-sm">ดูที่หมด {'>'}</Text>
            </TouchableOpacity>
          </View>

          {/* First Row of Service Cards */}
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity className="flex-1 mr-2">
              <View className="bg-white rounded-xl p-3 items-center">
                <View className="w-12 h-12 rounded-full items-center justify-center mb-2" style={{ backgroundColor: '#ff6b6b' }}>
                  <Text className="text-white text-xs font-bold">true</Text>
                  <Text className="text-white text-xs font-bold">money</Text>
                </View>
                <Text className="text-gray-800 text-xs font-medium text-center">บช 1</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 mx-1">
              <View className="bg-white rounded-xl p-3 items-center">
                <View className="w-12 h-12 rounded-full items-center justify-center mb-2" style={{ backgroundColor: '#4285f4' }}>
                  <Ionicons name="diamond-outline" size={20} color="white" />
                </View>
                <Text className="text-gray-800 text-xs font-medium text-center">บช 2</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 mx-1">
              <View className="bg-white rounded-xl p-3 items-center">
                <View className="w-12 h-12 rounded-full items-center justify-center mb-2" style={{ backgroundColor: '#00bcd4' }}>
                  <Ionicons name="water-outline" size={20} color="white" />
                </View>
                <Text className="text-gray-800 text-xs font-medium text-center">บช 3</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 ml-2">
              <View className="bg-white rounded-xl p-3 items-center">
                <View className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-full items-center justify-center mb-2">
                  <Ionicons name="add" size={20} color="#6b7280" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* Bottom Navigation with safe area */}
        <View style={{ paddingBottom: Math.max(insets.bottom, 8) }}>
          <BottomNavigation currentTab="home" onTabPress={onNavigate} />
        </View>
      </SafeAreaView>
    </View>
  );
}
