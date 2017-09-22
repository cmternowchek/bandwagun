import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConcertsIndexContainer from './ConcertsIndexContainer';

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
        </Switch>
     </BrowserRouter>
    )
  }
}

export default App;
