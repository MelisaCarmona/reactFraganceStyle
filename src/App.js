import './css/App.css';
import  { Navbar }  from  './components/navbar';
import {ItemListContainer} from './components/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting = "Catálogo de fragancias"/>
    </div>
  );
}

export default App;
