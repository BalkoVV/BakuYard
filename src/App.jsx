
// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import MainPage from 'pages/MainPage/MainPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import DishPage from 'pages/DishPage/DishPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PromotionsPage from 'pages/PromotionsPage/PromotionsPage';
import VacanciesPage from 'pages/VacanciesPage/VacanciesPage';
import FeedbacksPage from 'pages/FeedbacksPage/FeedbacksPage';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from 'index.css';

export const App = () => {
  return (
    <Router>
      <div>
        <Header />
          <div>
           <div className={styles.container}>
           <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/dish" component={DishPage} />
              <Route path="/contacts" component={ContactsPage} />
              <Route path="/promotions" component={PromotionsPage} />
              <Route path="/vacancies" component={VacanciesPage} />
              <Route path="/feedbacks" component={FeedbacksPage} />
            </Switch>
           </div>
          </div>
        <Footer />
      </div>
    </Router>
  );
};




