import React from 'react';
import { TabWrapper, TabName, Logo } from './style';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<TabWrapper >
      {this.props.data.map((tab) => {
        return <TabName key={tab.name} to= {tab.route}>  <span>{tab.name}</span> <Logo src='#'/></TabName>
      })}
    </TabWrapper>)
  }

}

export default Tab;
