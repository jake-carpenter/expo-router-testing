import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {Link, useRouter} from "expo-router";
import {LinkText} from "@/components/LinkText";
import {Button} from "@react-navigation/elements";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";

export default function DashboardScreen() {
  const {replace} = useRouter()

  return (
    <ScreenContainer>
      <Title name='(app)/dashboard'/>
      <Button onPress={() => replace('/(app)/sign-out')}>
        Sign out
      </Button>
    </ScreenContainer>
  )
}