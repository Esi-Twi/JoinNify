import { Stack } from "expo-router";
import {useFonts} from 'expo-font';

export default function RootLayout() {

  useFonts({
    'lobster': require('../assets/fonts/LobsterTwo-Regular.ttf'),
  })

  return  <Stack  screenOptions={{
    headerShown: false
  }}/>
}
