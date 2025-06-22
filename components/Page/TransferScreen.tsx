/**
 * ==============================
 * TRANSFER SCREEN COMPONENT
 * ==============================
 * Screen for selecting transfer options and viewing recent transfers
 */

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import components
import { BottomNavigation } from '../Helper/BottomNavigation';
import { RecentTransferItem } from '../Helper/RecentTransferITem';
import { TransferOption } from '../Helper/TransferOption';

// Import types and constants
import { RECENT_RECIPIENTS, TRANSFER_OPTIONS } from '../../constants';
import { NavigationProps } from '../../types';

export function TransferScreen({ onNavigate }: NavigationProps) {
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
        {/* Transfer Options */}
        <View className="space-y-4 mb-8">
          {TRANSFER_OPTIONS.map((option) => (
            <TransferOption
              key={option.id}
              title={option.title}
              subtitle={option.subtitle}
              icon={option.icon}
              onPress={() => onNavigate('selectAccount')}
            />
          ))}
        </View>

        {/* Recent Transfers */}
        <View className="border-l-4 border-green-400 pl-3 mb-4">
          <Text className="text-white text-lg font-semibold">การโอนล่าสุด</Text>
        </View>

        <View className="space-y-3 mb-8">
          {RECENT_RECIPIENTS.map((recipient) => (
            <RecentTransferItem
              key={recipient.id}
              name={recipient.name}
              account={recipient.accountNumber}
              bank={recipient.bankName}
              onPress={() => onNavigate('enterAmount')}
            />
          ))}
        </View>
      </ScrollView>

      <BottomNavigation currentTab="transfer" onTabPress={onNavigate} />
    </SafeAreaView>
  );
}
