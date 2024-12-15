import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {Link, useRouter} from "expo-router";
import {LinkText} from "@/components/LinkText";
import {Button} from "@react-navigation/elements";

export default function ForgotPasswordScreen() {
  const router = useRouter()
  return (
    <ScreenContainer>
      <Title name='/(sign-in)/forgot-password'/>
      <Button onPress={() => {
        router.dismissTo('/(sign-in)')
      }}>Reset password</Button>
    </ScreenContainer>
  )
}