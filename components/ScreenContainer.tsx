import {PropsWithChildren} from "react";
import {Text, View} from "@/components/Themed";
import {LinkText} from "@/components/LinkText";
import {Link} from "expo-router";
import {useSession} from "@/hooks/useSession";
import {useShallow} from "zustand/react/shallow";

export function ScreenContainer({children}: PropsWithChildren) {
  const {isAuthenticated} = useSession(useShallow((state) => ({isAuthenticated: state.isAuthenticated})))

  return (
    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', paddingVertical: 50}}>
      {children}
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text>Current auth status: {isAuthenticated ? 'signed in' : 'not signed in'}</Text>
        <Link href='/_sitemap'><LinkText routeName='_sitemap'/></Link>
      </View>
    </View>
  )
}
