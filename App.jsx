import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './page/Home';
import Data from "./page/DataSubscription";
import AirtimePurchase from './page/AirtimePurchase';
import Cable from './page/CableSubscription';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Sidebar />
        <main className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/data-subscription" component={DataSubscription} />
            <Route path="/airtime-purchase" component={AirtimePurchase} />
            <Route path="/cable-subscription" component={CableSubscription} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

