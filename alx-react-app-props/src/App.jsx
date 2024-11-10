import ProfilePage from './ProfilePage';
import React from React
import UserContext from '../UserContext'
import profilePage from './components/ProfilePage'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <UserContext.Provider value={userData}>
  <ProfilePage />
</UserContext.Provider>;
}

export default App;