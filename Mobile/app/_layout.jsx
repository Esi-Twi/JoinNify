import { Stack } from "expo-router";
import {useFonts} from 'expo-font';

export default function RootLayout() {

  useFonts({
    'lobster': require('../src/fonts/LobsterTwo-Regular.ttf'),
    'outfit': require('../src/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../src/fonts/Outfit-Bold.ttf'),
  })

  return  <Stack  screenOptions={{
    headerShown: false
  }}/>
}
