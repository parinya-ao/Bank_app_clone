/**
 * ==============================
 * ACCOUNT ITEM COMPONENT
 * ==============================
 * Reusable component for displaying account information with selection state
 */

import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface AccountItemProps {
  title: string;
  account: string;
  balance: string;
  isSelected: boolean;
  onPress: () => void;
}

export function AccountItem({
  title,
  account,
  balance,
  isSelected,
  onPress
}: AccountItemProps) {
  return (
    <TouchableOpacity
      className={`rounded-xl p-4 flex-row items-center border ${ isSelected
          ? 'bg-green-800/30 border-green-500'
          : 'bg-gray-800 border-gray-600'
        }`}
      onPress={onPress}
    >
      <View className="flex-1">
        <Text className="text-white font-semibold text-base mb-1">{title}</Text>
        <Text className="text-gray-400 text-sm mb-2">{account}</Text>
        <Text className="text-white text-lg font-medium">{balance} บาท</Text>
      </View>
      {isSelected && (
        <Ionicons name="checkmark-circle" size={24} color="#10b981" />
      )}
    </TouchableOpacity>
  );
}
