import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {Link} from "expo-router";
import {LinkText} from "@/components/LinkText";

export default function ListsScreen() {
  return (
    <ScreenContainer>
      <Title name='/(tabs)/lists'/>
      <Link href='/(shared)/product'><LinkText routeName='some products details'/> </Link>
    </ScreenContainer>
  )
}