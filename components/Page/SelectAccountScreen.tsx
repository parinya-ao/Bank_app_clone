/**
 * ==============================
 * SELECT ACCOUNT SCREEN COMPONENT
 * ==============================
 * Screen for selecting the source account for transfers
 */

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import components
import { AccountItem } from '../Helper/AccountItem';

// Import types and constants
import { USER_ACCOUNTS } from '../../constants';
import { NavigationProps } from '../../types';

export function SelectAccountScreen({ onNavigate }: NavigationProps) {
  const [selectedAccountId, setSelectedAccountId] = useState(USER_ACCOUNTS[0].id);

  const formatBalance = (balance: number): string => {
    return balance.toLocaleString('th-TH', { minimumFractionDigits: 2 });
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => onNavigate('transfer')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold">เลือกบัญชีต้นทาง</Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="space-y-3 mb-6">
          {USER_ACCOUNTS.map((account) => (
            <AccountItem
              key={account.id}
              title={account.title}
              account={account.accountNumber}
              balance={formatBalance(account.balance)}
              isSelected={selectedAccountId === account.id}
              onPress={() => {
                setSelectedAccountId(account.id);
                setTimeout(() => onNavigate('enterAmount'), 300);
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
