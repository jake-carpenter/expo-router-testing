import {View} from "react-native";
import React, {PropsWithChildren} from "react";
import {Text} from "@/components/Themed";

export function LinkText({routeName}: { routeName: string }) {
  return (<View style={{paddingVertical: 10}}>
    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>
      Go to {routeName}
    </Text>
  </View>)
}