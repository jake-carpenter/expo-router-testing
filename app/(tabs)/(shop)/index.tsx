import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {Link} from "expo-router";
import {LinkText} from "@/components/LinkText";

export default function ShopScreen() {
  return (
    <ScreenContainer>
      <Title name='/(tabs)/shop'/>
      <Link href='./product'><LinkText routeName='/(shop)/product' /></Link>
    </ScreenContainer>
  )
}