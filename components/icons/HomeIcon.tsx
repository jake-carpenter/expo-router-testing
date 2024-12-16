import Icon from '@expo/vector-icons/MaterialCommunityIcons'

interface Props {
  color?: string
}

export function HomeIcon(props: Props) {
  return <Icon name='home' {...props} />
}