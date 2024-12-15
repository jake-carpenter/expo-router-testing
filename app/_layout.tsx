import {Stack} from "expo-router";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";

export default function RootLayout() {
  return (
    <Stack initialRouteName='(app)' screenOptions={{headerShown: false}}>
      <Stack.Screen name='(app)'/>
      <Stack.Screen name='(sign-in)'/>
    </Stack>
  )
}