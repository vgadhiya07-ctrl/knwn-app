import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import MeCardScreen from '../screens/MeCardScreen';
import UniverseScreen from '../screens/UniverseScreen';
import { colors, fonts } from '../theme/tokens';

const Tab = createBottomTabNavigator();

function TabLabel({ label, focused }: { label: string; focused: boolean }) {
  return (
    <Text
      style={[
        styles.tabLabel,
        { color: focused ? colors.gold : colors.textMuted },
      ]}
    >
      {label}
    </Text>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarIconStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="MeCard"
        component={MeCardScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Me Card" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Universe"
        component={UniverseScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Universe" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.surface,
    borderTopColor: '#2A2535',
    borderTopWidth: 1,
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabLabel: {
    fontFamily: fonts.dmSans500,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
