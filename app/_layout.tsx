import {Stack, Tabs} from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName='(tabs)' screenOptions={{headerShown: false}}>
      <Stack.Screen name='(tabs)'/>
      <Stack.Screen name='(sign-in)' options={{animation: 'fade'}}/>
      <Stack.Screen name='sign-out' options={{presentation: 'modal'}}/>
    </Stack>
  )
}