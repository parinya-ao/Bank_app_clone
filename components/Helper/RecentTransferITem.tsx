/**
 * ==============================
 * RECENT TRANSFER ITEM COMPONENT
 * ==============================
 * Component for displaying recent transfer recipients
 */

import { Text, TouchableOpacity, View } from 'react-native';

interface RecentTransferItemProps {
  name: string;
  account: string;
  bank: string;
  onPress: () => void;
}

export function RecentTransferItem({
  name,
  account,
  bank,
  onPress
}: RecentTransferItemProps) {
  // Extract initials from name for avatar
  const getInitials = (fullName: string): string => {
    const nameParts = fullName.split(' ');
    if (nameParts.length >= 2) {
      return nameParts[0].charAt(0) + nameParts[1].charAt(0);
    }
    return fullName.charAt(0);
  };

  return (
    <TouchableOpacity
      className="bg-gray-800 rounded-xl p-4 flex-row items-center active:bg-gray-700"
      onPress={onPress}
    >
      <View className="w-12 h-12 bg-gray-600 rounded-full items-center justify-center mr-3">
        <Text className="text-white font-semibold text-base">
          {getInitials(name)}
        </Text>
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold text-base mb-1">{name}</Text>
        <Text className="text-gray-400 text-sm">
          {account} ({bank})
        </Text>
      </View>
    </TouchableOpacity>
  );
}
