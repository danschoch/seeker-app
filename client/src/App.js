import React, { Component } from 'react';
import './App.css';
import SideBar from './containers/SideBar';
import TopNav from './containers/TopNav';
import DashboardPage from './pages/DashboardPage';
import ContactsPage from './pages/ContactsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import OrganizationsPage from './pages/OrganizationsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <SideBar />
            <TopNav />
            <main>
              <Route path="/home" component={DashboardPage} />
              <Route exact path="/contacts" component={ContactsPage} />
              <Route exact path="/organizations" component={OrganizationsPage} />
            </main>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
