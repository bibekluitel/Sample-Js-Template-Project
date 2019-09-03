import React from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends React.PureComponent {

  render () {
    return (
      <div> 
        This is a Dashboard  <br />
        
        Please use below route to convert the currency 

        <Link to="/customerdetails">Convert the currency</Link>
        
      </div>
    )
  }
}

export default Dashboard;