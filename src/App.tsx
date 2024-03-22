import './App.css'
import './styles.css'

import { NavBar } from './components/NavBar'

import { ProfileCard } from './components/ProfileCard'

function App() {
  const profileCard = {
    avatarImage:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    profileEmail: 'oscar@email.com',
    profileName: 'Oscar Cortez'
  }

  return (
    <div>
      <NavBar />
      <ProfileCard
        avatarImage={profileCard.avatarImage}
        profileEmail={profileCard.profileEmail}
        profileName={profileCard.profileName}
      />
    </div>
  )
}

export default App
