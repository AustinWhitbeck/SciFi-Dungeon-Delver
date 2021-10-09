
// Imported native to React
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Imported styles
import './App.css';
import BrandFooter from './Components/BrandFooter/BrandFooter';

// Imported components
import CharacterSelect from './Components/CharacterSelect/CharacterSelect';
import Header from './Components/Header/Header';
import LoginScreen from './Components/LoginScreen/LoginScreen';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Route path="/" exact>
            <LoginScreen/>
        </Route>
        <Route path="/CharacterSelect" exact>
            <CharacterSelect/>
        </Route>

        <BrandFooter/>
        
      </Router>
    </div>
  );
}

export default App;
