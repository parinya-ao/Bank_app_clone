/**
 * ==============================
 * TRANSFER OPTION COMPONENT
 * ==============================
 * Reusable component for displaying transfer option cards
 */

import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface TransferOptionProps {
  title: string;
  subtitle: string;
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}

export function TransferOption({
  title,
  subtitle,
  icon,
  onPress,
  disabled = false
}: TransferOptionProps) {
  return (
    <TouchableOpacity
      className={`bg-gray-800 rounded-xl p-4 flex-row items-center ${ disabled ? 'opacity-50' : 'active:bg-gray-700'
        }`}
      onPress={onPress}
      disabled={disabled}
    >
      <View className="w-12 h-12 bg-green-500 rounded-full items-center justify-center mr-4">
        <Ionicons name={icon as any} size={24} color="white" />
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold text-base mb-1">{title}</Text>
        <Text className="text-gray-400 text-sm leading-5">{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#6b7280" />
    </TouchableOpacity>
  );
}
