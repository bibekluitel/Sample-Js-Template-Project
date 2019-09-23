import React from 'react';
import AppRouter from './router';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme} >
        <AppRouter />
      </ThemeProvider>
    );

  }
}

export default App;
