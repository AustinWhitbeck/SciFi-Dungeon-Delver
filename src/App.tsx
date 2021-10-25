
// Imported native to React
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Imported styles
import './App.css';

// Imported components
import CharacterSelect from './Components/CharacterSelect/CharacterSelect';
import FightScreen from './Components/FightScreen/FightScreen';
import Header from './Components/Header/Header';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import { MonsterContextProvider } from './ContextProvider/CurrentMonsterProvider';
import { UserContextProvider } from './ContextProvider/UserContextProvider';
import { StoryChapterContextProvider } from './ContextProvider/CurrentChapterProvider';
import StoryScreen from './Components/StoryScreen/StoryScreen';
import FinalScreen from './Components/FinalScreen/FinalScreen';




function App() {
  return (
    <div className="App">
      
      <Router>
        <MonsterContextProvider>
        <UserContextProvider>
        <StoryChapterContextProvider>
          <Header/>

          <Route path="/" exact>
              <LoginScreen/>
          </Route>
          <Route path="/CharacterSelect" exact>
              <CharacterSelect/>
          </Route>

          <Route path="/FightScreen" exact>
              <FightScreen/>
          </Route>

          <Route path="/StoryScreen" exact>
              <StoryScreen/>
          </Route>

          <Route path="/FinalScreen" exact>
              <FinalScreen/>
          </Route>

        </StoryChapterContextProvider>
        </UserContextProvider>
        </MonsterContextProvider>
      </Router>
    </div>
  );
}

export default App;
