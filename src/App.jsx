import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import { CartComponentContext } from './context/CartContext';

import { NavbarComponent } from './components/NavbarComponent/NavbarComponent';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { CheckoutContainer } from './containers/CheckoutContainer/index';


function App() {
  return (
    <>
      <CartComponentContext>
        <BrowserRouter>
          <NavbarComponent />

          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/category/:id" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={CheckoutContainer} />

            <Route path="*" component={() => <h1>404 Not Found</h1>} />
          </Switch>

          {/*<ItemListContainer greeting="Holaaaaa" />*/}

        </BrowserRouter>
      </CartComponentContext>
    </>
  );
}

export default App;
