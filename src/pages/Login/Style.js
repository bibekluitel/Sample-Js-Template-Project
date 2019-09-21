import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-width: 400px;
  background-color: ${props => props.theme.backgroundColor.loginBackground}
  height: 100vh
  padding: 20px 0px;
`;

export const ContentWrapper = styled.div`
width: 100%;
background-color: ${props => props.theme.backgroundColor.whiteBackground}
padding: 20px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const FormWrapper = styled.div`
min-width: 400px; 
max-width: 600px;
margin: 0 auto;
background-color: ${props=> props.theme.backgroundColor.loginBackground}
display: flex; 
flex-direction: column; 

`;

export const BrandName = styled.div`
  color: ${props => props.theme.color.black};
  margin: 10px 0px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex; 
  justify-content: flex-start;
`;


