// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CartProvider } from 'components/CartProvider/CartProvider';

import MainPage from 'pages/MainPage/MainPage';
import DeliveryPage from 'pages/DeliveryPage/DeliveryPage';
import MenuPage from 'pages/MenuPage/MenuPage';
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

              <Route path="/" exact component={MainPage} />
              
              <CartProvider>
                <Route path="/menu" component={MenuPage} />
                <Route path="/delivery" component={DeliveryPage} />
              </CartProvider>
              
              <Route path="/contacts" component={ContactsPage} />

            </Switch>
            </div>
            <Footer />
           </MasterContainer>

        
        
    </Router>
  );
};
