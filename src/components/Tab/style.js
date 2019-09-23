import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  `;


export const TabName = styled(Link)`
  border-radius: 6px;
  font: bold 15px arial;
  padding: 19px 45px 10px 10px;
  height: 34px;
  display: felx;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 5px 4px 0;
  color: #3c3c3c;
  background-color: #d1f6f9;
  `;

export const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`