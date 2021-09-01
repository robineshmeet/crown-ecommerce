import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

const App = () => {
  const [user, setUser] = useState({});
  console.log(user)

  useEffect(() => {
    let unSubscribeFromAuth = null
    unSubscribeFromAuth = auth.onAuthStateChanged(auth => setUser(auth));
    return () => unSubscribeFromAuth()
  }, [])
  return (
    <div >
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />

      </Switch>
    </div>
  );
}

export default App;
