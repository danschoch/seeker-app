import React, { Component } from 'react';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import ContactsPage from './pages/ContactsPage';
import TasksPage from './pages/TasksPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route exact path="/tasks" component={TasksPage} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
