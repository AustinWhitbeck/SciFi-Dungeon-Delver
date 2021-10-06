
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
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
        
      </Router>
    </div>
  );
}

export default App;
