import React, { Component } from 'react';

import customTheme from './components/CustomTheme'
import ListofItems from './components/ListofItems'
import { MuiThemeProvider } from '@material-ui/core';
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={customTheme}>
          <ListofItems></ListofItems>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
