import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Homepage from './containers/Homepage/Homepage'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'

import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Homepage} />

      </Switch>
    )
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}
export default App;
