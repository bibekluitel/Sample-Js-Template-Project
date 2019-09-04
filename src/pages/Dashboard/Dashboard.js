import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

class Dashboard extends React.PureComponent {

  render() {
    return (
      <div className={styles.wrapper}>
        <p className="header">
          Welcome to Dashboard
          </p>  <br />

        <p>Please use below route to convert the currency </p>

        <p><Link to="/customerdetails">Convert the currency</Link></p>

      </div>
    )
  }
}

export default Dashboard;