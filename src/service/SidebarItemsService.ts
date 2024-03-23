import { IconType } from 'react-icons'
import { AiOutlineRocket } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'

interface ListItem {
  icon?: IconType
  label: string
  navigateTo?: string
  type: string
}

export enum ListItemType {
  LinkItem = 'linkItem',
  Title = 'titleItem',
  Badge = 'badgeItem'
}

export const items: ListItem[] = [
  {
    label: 'Kurv',
    icon: AiOutlineRocket,
    navigateTo: '/',
    type: ListItemType.LinkItem
  },
  {
    label: 'Mine Annoncer',
    navigateTo: '/contact',
    type: ListItemType.LinkItem
  },
  {
    label: 'Mine GenbrugNU salg',
    navigateTo: '/services',
    type: ListItemType.LinkItem
  },
  { label: 'Mine favoritter', navigateTo: '/', type: ListItemType.LinkItem },
  { label: 'Mine beskeder', navigateTo: '/', type: ListItemType.LinkItem },
  { label: 'Mine oplysninger', navigateTo: '/', type: ListItemType.LinkItem },
  { label: 'PacketPost', navigateTo: '/contact', type: ListItemType.Badge },
  {
    label: 'Log ud',
    icon: AiOutlineLogout,
    navigateTo: '/',
    type: ListItemType.LinkItem
  },
  { label: 'Kontakt Gul&Gratis', type: ListItemType.Title },
  {
    label: 'Kundeservice',
    navigateTo: '/services',
    type: ListItemType.LinkItem
  },
  {
    label: 'Annoncering',
    navigateTo: '/services',
    type: ListItemType.LinkItem
  }
]
