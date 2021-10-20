
// Imported native to React
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Imported styles
import './App.css';
import BrandFooter from './Components/BrandFooter/BrandFooter';

// Imported components
import CharacterSelect from './Components/CharacterSelect/CharacterSelect';
import FightScreen from './Components/FightScreen/FightScreen';
import Header from './Components/Header/Header';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import { MonsterContextProvider } from './ContextProvider/CurrentMonsterProvider';
import { UserContextProvider } from './ContextProvider/UserContextProvider';




function App() {
  return (
    <div className="App">
      
      <Router>
        <MonsterContextProvider>
        <UserContextProvider>
        <Header/>

        <Route path="/" exact>
            <LoginScreen/>
            <CharacterSelect/>
        </Route>
        <Route path="/CharacterSelect" exact>
            <CharacterSelect/>
        </Route>

        {/* <BrandFooter/> */}
        <Route path="/FightScreen" exact>
            <FightScreen/>
        </Route>
        </UserContextProvider>
        </MonsterContextProvider>
      </Router>
    </div>
  );
}

export default App;
