import { IconType } from 'react-icons'
import { AiFillFire } from 'react-icons/ai'

interface ListItem {
  icon?: IconType
  label: string
  navigateTo: string
  isTitle?: boolean
}

export const items: ListItem[] = [
  { label: 'Kurv', icon: AiFillFire, navigateTo: '/' },
  { label: 'Mine Annoncer', navigateTo: '/contact' },
  { label: 'Mine GenbrugNU salg', navigateTo: '/services' },
  { label: 'Mine favoritter', navigateTo: '/' },
  { label: 'Mine beskeder', navigateTo: '/' },
  { label: 'Mine oplysninger', navigateTo: '/' },
  { label: 'Log ud', navigateTo: '/' },
  { label: 'Kontakt Gul&Gratis', navigateTo: '/', isTitle: true }
]
