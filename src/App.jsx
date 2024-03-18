// App.jsx

import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MasterContainer from 'components/MasterContainer/MasterContainer'

import MainPage from 'pages/MainPage/MainPage';
import AboutPage from 'pages/AboutPage/AboutPage';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export const App = () => {
  return (
   <MasterContainer>
      <Router>
         <Header />
          <div>
           <Route>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" component={AboutPage} />
            </Route>
          </div> 
        <Footer />
      </Router>
   </MasterContainer>
    
  );
};



