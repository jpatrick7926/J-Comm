import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
//import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage'
import ReviewsPage from './pages/ReviewsPage/ReviewsPage'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/product/:id' component={ProductPage}/>
          <Route exact path='/cart' component={CartPage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/reviews' component={ReviewsPage}/>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// test
