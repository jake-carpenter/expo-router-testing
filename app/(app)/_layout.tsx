import {Redirect, Stack, useRouter} from "expo-router";
import {useEffect} from "react";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";
import {dismissTo} from "expo-router/build/global-state/routing";

export default function AppLayout() {
  const {isAuthenticated} = useSession(useShallow(state => ({isAuthenticated: state.isAuthenticated})))

  if (!isAuthenticated) {
    return <Redirect href='/(sign-in)'/>
  }

  return <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name='dashboard'/>
    <Stack.Screen name='sign-out'/>
  </Stack>
}
