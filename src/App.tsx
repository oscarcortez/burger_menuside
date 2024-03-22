import './App.css'
import './styles.css'

import { NavBar } from './components/NavBar'
import { Avatar } from './components/Avatar'
import { ProfileCard } from './components/ProfileCard'

function App() {
  return (
    <div>
      <NavBar />
      <ProfileCard profileEmail="oscar@email.com" profileName="Oscar Cortez">
        <Avatar
          image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Oscar Cortez"
        />
      </ProfileCard>
    </div>
  )
}

export default App
