import {ScreenContainer} from "@/components/ScreenContainer";
import {Text} from "@/components/Themed";
import {ActivityIndicator} from "react-native";
import {useEffect} from "react";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";
import {useRouter} from "expo-router";

export default function SignOutScreen() {
  const {logout} = useSession(useShallow((state) => ({logout: state.logout})))
  const {dismissTo} = useRouter()

  useEffect(() => {
    const timer = setTimeout(async () => {
      await logout();
      dismissTo('/(sign-in)');
    }, 1500);
    return () => clearTimeout(timer);
  }, [])

  return (
    <ScreenContainer>
      <Text>Signing out...</Text>
      <ActivityIndicator size='large'/>
    </ScreenContainer>
  )
}