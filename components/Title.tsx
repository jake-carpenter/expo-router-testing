import {Text, View} from "@/components/Themed";

export function Title({name}: { name: string }) {
  return (
    <View style={{marginVertical: 20}}>
      <Text style={{fontSize: 20}}>
        This is
        <Text style={{fontWeight: 'bold', color: 'red'}}> {name}</Text>
      </Text>
    </View>
  )
}