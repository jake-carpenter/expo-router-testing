import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {Link, useRouter} from "expo-router";
import {LinkText} from "@/components/LinkText";

export default function AyyScreen() {
  return (
    <ScreenContainer>
      <Title name='/(sign-in)/help'/>
      <Link dismissTo href='/(sign-in)'><LinkText routeName='/(sign-in)'/></Link>
    </ScreenContainer>
  )
}