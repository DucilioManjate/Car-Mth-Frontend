

import React from 'react';
import { Stack } from 'expo-router';
import TabLayout from './(tabs)/_layout';
import NotFoundScreen from './+not-found';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Tabs">
        {() => <TabLayout />}
      </Stack.Screen>
      <Stack.Screen name="NotFound">
        {() => <NotFoundScreen />}
      </Stack.Screen>
    </Stack>
  );
}
