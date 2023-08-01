import './App.css';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';
function App() {

  return (
    <div className="App">
      <LoginButton /><br /><br />
      <Profile />
      <LogoutButton />
    </div>
  );
}

export default App;
