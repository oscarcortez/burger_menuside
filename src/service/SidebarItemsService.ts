import { IconType } from 'react-icons'
import { AiOutlineRocket } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'

interface ListItem {
  icon?: IconType
  label: string
  navigateTo?: string
  type: string
}

export const profileValues = {
  avatarImage:
    'https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745',
  name: 'John Doe',
  email: 'john@doe',
}

export enum ListItemType {
  LinkItem = 'linkItem',
  Title = 'titleItem',
  Badge = 'badgeItem',
}

export const items: ListItem[] = [
  {
    label: 'Kurv',
    icon: AiOutlineRocket,
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Mine Annoncer',
    navigateTo: '/contact',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Mine GenbrugNU salg',
    navigateTo: '/services',
    type: ListItemType.LinkItem,
  },
  { label: 'Mine favoritter', navigateTo: '/', type: ListItemType.LinkItem },
  { label: 'Mine beskeder', navigateTo: '/', type: ListItemType.LinkItem },
  { label: 'Mine oplysninger', navigateTo: '/', type: ListItemType.LinkItem },
  { label: 'PacketPost', navigateTo: '/contact', type: ListItemType.Badge },
  {
    label: 'Log ud',
    icon: AiOutlineLogout,
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  { label: 'Kontakt Gul&Gratis', type: ListItemType.Title },
  {
    label: 'Kundeservice',
    navigateTo: '/services',
    type: ListItemType.LinkItem,
  },
]

export const seeMoreItems = [
  { label: 'Find os ogsa her', type: ListItemType.Title },
  {
    label: 'App til iPhone/iPad',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Blog',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Facebook',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Instagram',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Facebook',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'TikTok',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Gul&Gratis e-avis',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  { label: 'Gul&Gratis', type: ListItemType.Title },
  {
    label: 'Forside',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Min Side',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Kategorioversigt',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'MitID Validering',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Brugervilkar',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Privatlivspolitik',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Cookieindstillinger',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Vilkar for erhverv',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Whistleblowerordning',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Samarbejdspartnere',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
  {
    label: 'Annoncebetalt indhold',
    navigateTo: '/',
    type: ListItemType.LinkItem,
  },
]
