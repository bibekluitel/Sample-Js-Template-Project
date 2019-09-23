import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${props=> props.theme.backgroundColor.headerBackgroundColor}
  z-index: 5;
  width: 100%;
  `;

const Bar = styled.div`
  border-bottom: 1px solid #999;
  height: 29px;
  font: bold 12px arial;
  text-transform: uppercase;
  padding-top: 4px;
`;

const Inner = styled.div`
  width: 980px;
  display: flex; 
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const LoginState = styled.div`
  display: flex; 
  align-items: center;
  
`

const NavBar = styled.div`
  dispaly: flex;
  align-items: center
`;

const RouterLink = styled(Link)`
margin-right: 10px;
`


const Header = (props) => (<Wrapper>
  <Bar>
    <Inner>
      <NavBar>
        <RouterLink to="overview" > Messaging </RouterLink>
        <RouterLink to="numbers" >Numbers</RouterLink>
        <RouterLink to="profile" >Settings</RouterLink>
        <RouterLink to="billing">Billing</RouterLink>
        <RouterLink to="https://developer.transmitsms.com" target="_blank">API</RouterLink>
      </NavBar>
      <LoginState>
        <span>{props.userName} : <RouterLink to="/logout">logout</RouterLink> </span>
        <div>
          Balance: <span>$47.11</span>
        </div >
        <span >
          <input value="Add Credit" type="button" onClick={() => window.location.href = 'billing?action=credit'} style={{ fontSize: "12px" }} />
        </span>
      </LoginState>
    </Inner>
  </Bar>
</Wrapper >)

export default Header;