import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { DashboardWrapper, CompanyName } from './style';
import { Tab, Header, Activity, OverView} from './../../components';


const tabData = [
  {
    name: "Overview",
    route: "/overview",
    logo: "overview",
    color: ""
  },
  {
    name: "Activity",
    route: "/activity",
    logo: "activity",
    color: ""
  },
  {
    name: "Contacts",
    route: "/contacts",
    logo: "contacts",
  },
  {
    name: "Send Sms",
    route: "/sendsms",
    logo: "activity",
  }
]

class Dashboard extends React.PureComponent {

  render() {

    const currentTab = tabData.find((tab)=> tab.route=== this.props.location.pathname) || { name: 'Overview'};
    return (
      <DashboardWrapper>
        <Header userName = 'bibek' />
        <CompanyName>
          <a class="logo" href="overview"> Burst SMS Australia </a>
          <h1 class="right"> {currentTab.name} </h1>
        </CompanyName>
        <Tab data={tabData} />
        <Router>
          <Switch>
            <Route path= '/overview' component={OverView}/>
            <Route path= '/activity' component={Activity}/>
            <Route path= '/' component={OverView}/>
          </Switch>
        </Router>
      </DashboardWrapper>
    )
  }
}

export default Dashboard;