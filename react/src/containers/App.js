import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConcertsIndexContainer from './ConcertsIndexContainer';
import ConcertsShowContainer from './ConcertsShowContainer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/concerts" component={ConcertsIndexContainer} />
          <Route exact path="/concerts/:id" component={ConcertsShowContainer} />
        </Switch>
     </BrowserRouter>
    )
  }
}

export default App;
