// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from 'components/CartProvider/CartProvider';

import MainPage from 'pages/MainPage/MainPage';
import MenuPage from 'pages/MenuPage/MenuPage';
import BasketPage from 'pages/BasketPage/BasketPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MasterContainer from 'components/MasterContainer/MasterContainer';
import styles from 'index.css';

export const App = () => {
  return (
    <Router>
      <MasterContainer>
        <Header />
        <div className={styles.container}>
          <Switch>
            <CartProvider>
              <Route path="/main" component={MainPage} />
              <Route path="/menu" component={MenuPage} />
              <Route path="/basket" component={BasketPage} />
              <Route path="/contacts" component={ContactsPage} />
            </CartProvider>
          </Switch>
        </div>
        <Route render={({ location }) => {
          const isContactsPage = location.pathname === '/contacts';
          return <Footer customLinks={isContactsPage ? <a href="https://developer-site.com">Ben Happyngton</a> : null} />;
        }} />
      </MasterContainer>
    </Router>
  );
};
