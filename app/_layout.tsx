import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          title: "Top10 Bangkok Coffee",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#dc8914",
          },
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: "รายละเอียดร้าน",
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
          },
          headerStyle: {
            backgroundColor: "#dc8914",
          },
        }}
      />
    </Stack>
  );
}
