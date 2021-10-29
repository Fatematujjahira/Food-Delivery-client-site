import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './component/header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/register/Signup';
import AuthProvider from './contexts/AuthProvider';
import Recommodation from './pages/recommodation/Recommodation';
import Details from './pages/Details/Details';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './Contact/Contact';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
         </Route>
        <Route exact path="/home">
            <Home></Home>
         </Route>
        <PrivateRoute exact path="/service">
            <Services></Services>
         </PrivateRoute>
        <Route exact path="/about">
            <About></About>
         </Route>
        <Route exact path="/contact">
           <Contact></Contact>
         </Route>
        <PrivateRoute exact path="/recommodation">
            <Recommodation></Recommodation>
         </PrivateRoute>
        <Route exact path="/login">
            <Login></Login>
            </Route>
            <Route path="/details/:productId">
            <Details></Details>
            </Route>
        <Route exact path="/signup">
            <Signup></Signup>
         </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
