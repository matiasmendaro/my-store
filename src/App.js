import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


import { NavbarComponent } from './components/NavbarComponent/NavbarComponent';
import { ItemListContainer } from './containers/ItemListContainer';


function App() {
  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting="Holaaaaa" />
    </>
  );
}

export default App;
