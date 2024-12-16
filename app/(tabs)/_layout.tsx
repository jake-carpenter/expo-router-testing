import {Redirect, Tabs} from "expo-router";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";
import {HomeIcon} from "@/components/icons/HomeIcon";

export default function AppLayout() {
  const {isAuthenticated} = useSession(useShallow(state => ({isAuthenticated: state.isAuthenticated})))

  if (!isAuthenticated) {
    return <Redirect href='/(sign-in)'/>
  }

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name='dashboard' options={{title: 'home', tabBarIcon: (p) => <HomeIcon {...p}/>}}/>
      <Tabs.Screen name='(shop)'  options={{title: 'Shop'}}/>
      <Tabs.Screen name='(orders)' options={{title: 'Orders'}}/>
      <Tabs.Screen name='(lists)' options={{title: 'Lists'}}/>
      <Tabs.Screen name='(cart)' options={{title: 'Cart'}}/>
    </Tabs>
  )
}
