import React, { Component } from 'react';
import './App.css';
import SideBar from './containers/SideBar';
import DashboardPage from './pages/DashboardPage';
import ContactsPage from './pages/ContactsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <SideBar />
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route exact path="/activities" component={ActivitiesPage} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
