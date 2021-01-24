import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Corousal from './components/corousal';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home'
function App() {
  return (
    <div className="App">
      <Header />
     
      <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/bagitem" component={BagItem} />
        <Route path="/user" component={User} />
        <Route path="/sigin" component={SignIn} />
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/allitems">
          <CardList />
        </Route>
        <Route path="/cart" component={CartItems}></Route>
        <Route path="/wishlist" component={WishList}></Route> */}
      </Switch>
      
      </BrowserRouter>
      <Corousal className="corousal" />
     
    </div>
  );
}

export default App;
