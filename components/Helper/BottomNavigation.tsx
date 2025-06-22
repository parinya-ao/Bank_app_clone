/**
 * ==============================
 * BOTTOM NAVIGATION COMPONENT
 * ==============================
 * Main navigation component that appears at the bottom of most screens
 * Provides quick access to primary app sections
 */

import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, NAVIGATION_TABS } from '../../constants';
import { ScreenType } from '../../types';

interface BottomNavigationProps {
  currentTab: string;
  onTabPress: (screen: ScreenType) => void;
}

export function BottomNavigation({
  currentTab,
  onTabPress
}: BottomNavigationProps) {
  return (
    <View className="bg-gray-800 flex-row justify-around py-3 border-t border-gray-700 px-2">
      {NAVIGATION_TABS.map((tab) => {
        const isActive = currentTab === tab.id;

        return (
          <TouchableOpacity
            key={tab.id}
            className="items-center flex-1 py-1"
            onPress={() => onTabPress(tab.screenType)}
          >
            {tab.isSpecial ? (
              // Special circular button for main transaction tab
              <View className="w-12 h-12 bg-green-500 rounded-full items-center justify-center mb-1">
                <Text className="text-white font-bold text-lg">{tab.icon}</Text>
              </View>
            ) : (
              <Ionicons
                name={tab.icon as any}
                size={24}
                color={isActive ? COLORS.primary.green : COLORS.text.muted}
                style={{ marginBottom: 4 }}
              />
            )}
            <Text
              className={`text-xs ${ isActive || tab.isSpecial
                  ? 'text-green-500'
                  : 'text-gray-400'
                }`}
              numberOfLines={1}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
