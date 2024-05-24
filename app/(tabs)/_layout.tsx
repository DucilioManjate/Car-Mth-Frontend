

import React from 'react';
import { Tabs } from 'expo-router';
import HomeScreen from './(home)/index';
import SettingsScreen from './settings';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)">
        {function HomeScreenWrapper() {
          return <HomeScreen />;
        }}
      </Tabs.Screen>
      <Tabs.Screen name="Settings">
        {function SettingsScreenWrapper() {
          return <SettingsScreen />;
        }}
      </Tabs.Screen>
    </Tabs>
  );
}
