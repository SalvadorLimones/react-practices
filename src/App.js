import './App.css';
import ButtonList from  './components/ButtonList';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import Profile3 from './components/Profile3';
import Profile4 from './components/Profile4';

function App() {
  return (
    <div className="App">
      <ButtonList/>
      <Profile/>
      <Profile2/>
      <Profile3/>
      <Profile4/>
    </div>
  );
}

export default App;

//gomb clickre div-et ad hozzá egy szöveggel

//változó stringgel és ezt eljuttatni a gomb feliratának

//buttonlist komponens 10* jelenítse meg a gombot és ezt húzzuk be a komponensbe