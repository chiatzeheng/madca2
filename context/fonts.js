import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, InriaSans_400Regular} from '@expo-google-fonts/inria-sans';

export default function () {
  let [fontsLoaded] = useFonts({
    InriaSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontFamily: 'InriaSans_400Regular', fontSize: 40 }}>Inter Black</Text>
    </View>
  );
}