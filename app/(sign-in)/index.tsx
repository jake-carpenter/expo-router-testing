import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {LinkText} from "@/components/LinkText";
import {Link, useRouter} from "expo-router";
import {Button} from "react-native";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";

export default function SignInScreen() {
  const {login} = useSession(useShallow((state) => ({login: state.login})))
  const {dismissTo} = useRouter()
  return (
    <ScreenContainer>
      <Title name='/(sign-in)'/>
      <Link href='/(sign-in)/help'><LinkText routeName='/(sign-in)/help'/></Link>
      <Link href='./forgot-password'><LinkText routeName='/(sign-in)/forgot-password'/></Link>

      <Button onPress={async () => {
        await login()
        dismissTo('/(app)/dashboard')
      }} title='Sign in'/>

    </ScreenContainer>
  )
}
