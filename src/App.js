import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import './app.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Landing from './components/home/Landing'
import Job from './components/home/Job'

import store from './store'

class App extends Component {
  render (){
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/job/:id" component={Job} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );}
}

export default App;
