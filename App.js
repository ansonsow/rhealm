import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react'
// import axios from 'axios';
import { NativeBaseProvider } from 'native-base';
import { AppStack } from './src/components/stacks/AppStack';
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from 'react';
import { theme } from './themes';
// import * as Font from "expo-font";
import "expo-dev-client";

// SplashScreen.preventAutoHideAsync();

export default function App() {

  return (
    <SafeAreaView
      style={styles.container}
    >
      <NativeBaseProvider
        theme={theme}
      >
        <AppStack />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    // paddingLeft: 20,
    // paddingTop: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
});
