import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Wrapper, ContentWrapper, FormWrapper, BrandName, Row } from './Style';
import { Form, SubmitButton, InputWithLabel } from './../../lib/Form';
import Auth from './../../utils/Auth';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  onSubmit = async (data) => {
    console.log(data);
    this.setState({
      isSubmitting: true
    })

    let isSucessfulLogin = await Auth.login(data.username, data.password);
    this.setState({
      isSubmitting: false, 
      redirect: isSucessfulLogin
    });
  }

  render() {
    if(this.state.redirect){
      return <Redirect to = '/' />
    }
    return (<Wrapper>
      <ContentWrapper>
        <BrandName > Brust SMS  </BrandName>
        <Form>
          <FormWrapper>
            <Row> <InputWithLabel name='username' id="username" labelText="username" /></Row>

            <Row><InputWithLabel type='password' name='password' id="password" labelText="password" /></Row>
            <SubmitButton onSubmit={this.onSubmit} > Login</SubmitButton>
          </FormWrapper>
        </Form>
      </ContentWrapper>

    </Wrapper>);
  }

}
export default Login;