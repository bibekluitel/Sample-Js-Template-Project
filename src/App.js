import React from 'react';
import AppRouter from './router';
import AppContext from './AppContext';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  clearState = () => {
    this.setState({

    })
  }

  updateUserDetails = (userDetails) => {
    this.setState({
      user: userDetails
    })
  }

  updateConversionDetails = (updatedDetails) => {
    this.setState({
      conversionDetails: {
        ...this.state.conversionDetails, 
        ...updatedDetails
      }
    })
  }

  // TODO: Implement a theme architecture for application
  // TODO: Using SCSS instead of CSS
  // TODO: use Skinh HAsh for Internalization

  render() {
    return (
      <AppContext.Provider value = { {
        state: this.state, 
        clearState: this.clearState, 
        updateUserDetails: this.updateUserDetails, 
        updateConversionDetails: this.updateConversionDetails
      }}>
        <AppRouter />
      </AppContext.Provider>
    );

  }
}

export default App;
