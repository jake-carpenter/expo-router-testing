import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {LinkText} from "@/components/LinkText";
import {Link, Redirect, useRouter} from "expo-router";
import {Button} from "react-native";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";

export default function SignInScreen() {
  const {dismissTo} = useRouter()
  const {login, isAuthenticated} = useSession(useShallow((state) => ({
    isAuthenticated: state.isAuthenticated,
    login: state.login
  })))

  if (isAuthenticated) {
    return <Redirect href='/(tabs)/dashboard'/>
  }

  return (
    <ScreenContainer>
      <Title name='/(sign-in)'/>
      <Link href='./help'><LinkText routeName='/(sign-in)/help'/></Link>
      <Link href='./forgot-password'><LinkText routeName='/(sign-in)/forgot-password'/></Link>

      <Button onPress={async () => {
        await login()
        dismissTo('/(tabs)/dashboard')
      }} title='Sign in'/>

    </ScreenContainer>
  )
}
