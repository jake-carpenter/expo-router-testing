import {ScreenContainer} from "@/components/ScreenContainer";
import {Title} from "@/components/Title";
import {Link, useRouter} from "expo-router";
import {Button} from "react-native";

export default function ProductScreen() {
  const {back, canGoBack} = useRouter()
  return (
    <ScreenContainer>
      <Title name='/(shared)/product'/>
      <Button title='Go back' onPress={() => {
        if (!canGoBack()) {
          console.log("Oops, can't do that")
        }

        back()
      }}/>
    </ScreenContainer>
  )
}