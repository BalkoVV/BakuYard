// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import MenuPage from 'pages/MenuPage/MenuPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { CartProvider } from 'components/CartProvider/CartProvider';

// import Pizza from 'components/MenuComponents/Pizza/Pizza';

import styles from 'index.css';
import MasterContainer from 'components/MasterContainer/MasterContainer';

export const App = () => {
  return (
    <Router>
          
            <Header />
            <MasterContainer>
           <div className={styles.container}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" component={AboutPage} />
              <CartProvider>
                <Route path="/menu" component={MenuPage} />
              </CartProvider>
              <Route path="/contacts" component={ContactsPage} />
            </Switch>
           </div>
           </MasterContainer>
        <Footer />
        
    </Router>
  );
};
