import {Stack} from "expo-router";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";

export default function UnauthenticatedLayout() {
  const {isAuthenticated} = useSession(useShallow((state) => ({isAuthenticated: state.isAuthenticated})))
  console.log(isAuthenticated)
  return <Stack initialRouteName='(app)' screenOptions={{headerShown: false}}>
    <Stack.Screen name='(app)'/>
    <Stack.Screen name='(sign-in)' options={{presentation: 'modal', animation: 'none'}}/>
  </Stack>
}