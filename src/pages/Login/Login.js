import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { LoginWrapper, ContentWrapper, FormWrapper, BrandName, Row } from './Style';
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
    console.log(isSucessfulLogin, this)
    this.setState({
      isSubmitting: false, 
      redirect: isSucessfulLogin
    });
  }

  render() {
    if(this.state.redirect){
      return <Redirect to = '/' />
    }
    return (<LoginWrapper>
      <ContentWrapper>
        <BrandName > Brust SMS  </BrandName>
        <Form>
          <FormWrapper>
            <Row> <InputWithLabel name='username' id="username" labeltext="username" /></Row>

            <Row><InputWithLabel type='password' name='password' id="password" labeltext="password" /></Row>
            <SubmitButton onSubmit={this.onSubmit} > Login</SubmitButton>
          </FormWrapper>
        </Form>
      </ContentWrapper>

    </LoginWrapper>);
  }

}
export default Login;