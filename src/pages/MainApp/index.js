import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from '..';
import { Header } from '../../components';
import Footer from '../../components/molekuls/Footer';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import DetailBlog from '../DetailTour';
import ListTours from '../ListTour';
import MapTour from '../MapTour';
import PesananTiket from '../PesananTiket';

import './mainApp.scss';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
      <a tabIndex={0} href='#mainContent' className='skip-link'>Go to Content</a>
      <Header />
      <main id='mainContent' className='content-wrapper'>
        <Router>
          <Switch>
            <Route path="/list-tour">
              <ListTours />
            </Route>
            <Route path="/map-tours">
              <MapTour />
            </Route>
          
           
            <Route path="/detail-tour/:id">
              <DetailBlog />
            </Route>
            <Route path="/tiket-tour/:id">
              <PesananTiket/>
              </Route>
             
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default MainApp;
