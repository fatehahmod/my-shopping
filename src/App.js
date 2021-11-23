import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import SingleProduct from './Pages/SingleProduct.js/SingleProduct';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        <Route path="/home"> 
          <Home></Home>
        </Route>
        <Route path="/singleProduct/:id">
          <SingleProduct></SingleProduct>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
