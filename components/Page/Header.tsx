/**
 * ==============================
 * HEADER COMPONENT
 * ==============================
 * Main header component displayed at the top of screens
 * Contains profile image, K+ logo, and action buttons
 */

import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { APP_CONFIG } from '../../constants';

export function Header() {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      {/* Profile Image */}
      <View className="w-12 h-12 rounded-full bg-gray-400 overflow-hidden">
        <Image
          source={{ uri: APP_CONFIG.user.profileImage }}
          className="w-full h-full"
          defaultSource={require('../../assets/icon.png')}
        />
      </View>

      {/* K+ Logo */}
      <View className="flex-row items-center">
        <Text className="text-white text-xl font-bold mr-1">K</Text>
        <Text className="text-green-400 text-xl font-bold">+</Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center space-x-4">
        {/* Notification Bell with Badge */}
        <View className="relative">
          <Ionicons name="notifications-outline" size={26} color="white" />
          <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        </View>

        {/* Power/Settings Button */}
        <Ionicons name="power" size={26} color="white" />
      </View>
    </View>
  );
}
