import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './style.module.css';
import './../../App.css';
import { Form, InputWithLabel, TelephoneInputWithLabel, DropDownListWithLabel, SubmitButton } from './../../lib/Form';
import { submitData } from './../../utils/commonfunctions';
import AppContext from './../../AppContext';

class CustomerDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = async (value) => {

    if (typeof value === "string" || !value) {

      alert(value);
      return
    }

    this.setState({ isSubmitting: true });

    const result = await submitData({ from: value.fromCurrency, to: value.toCurrency, amount: value.amount });

    if (!result) {
      return
    }

    this.setState({
      isSubmitting: false
    })

    this.context.updateUserDetails({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phoneNumber: value.telephone,
      countryCode: value.countrycode
    });

    this.context.updateConversionDetails({
      fromCurrency: value.fromCurrency,
      toCurrency: value.toCurrency,
      amount: value.amount,
      ...result
    });

    return this.props.history.push('conversionresult');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className="header">
          <h1>Quick Quote</h1>
        </div>
        <Form>
          <div className={styles.formWrapper}>
            <div className={styles.customerinfo}>
              <div className={`${styles.row}`}>
                <InputWithLabel labelText='First Name' isRequired labelPosition='top' name='firstname' id="firstname" />
                <InputWithLabel labelText="Last Name" isRequired labelPosition='top' name='lastname' id="lastname" />
              </div>
              <div className={styles.row}>
                <InputWithLabel labelText='Email' labelPosition='top' name='email' id="email" />
              </div>
              <div className={styles.row}>
                <TelephoneInputWithLabel labelText="Phone Number" labelPosition='top' name='telephone' id="telephone" rules={["isNumber", "isTelephone"]}/>
              </div>
            </div>

            <div className={styles.transactioninfo}>
              <div className={styles.row}>
                <DropDownListWithLabel isRequired labelText='From Currency' name="fromCurrency" id="fromCurrency" >
                  {/* TODO: get a dynamic map for currency list */}
                  <option value=''> </option>
                  <option value='AUD'> Australian Dollar(AUD) </option>
                  <option value='USD'> United State Dollar(USD) </option>
                  <option value='GBP'> Pound Sterling(GBP) </option>
                </DropDownListWithLabel>

                <DropDownListWithLabel isRequired labelText='To Currency' name="toCurrency" id="toCurrency">
                  {/* TODO: get a dynamic map for currency list */}
                  <option value=''> </option>
                  <option value='AUD'> Australian Dollar(AUD) </option>
                  <option value='USD' > United State Dollar(USD) </option>
                  <option value='GBP'> Pound Sterling(GBP) </option>
                </DropDownListWithLabel>
              </div>

              <div className={styles.row}>
                <InputWithLabel isRequired labelText="Amount" name="amount" id="amount" rules={["isNumber"]}/>
              </div>
              <div className={styles.buttonWrapper}>
                <SubmitButton onSubmit={this.onSubmit} isDisabled={this.state.isSubmitting} id="submit" >
                  Get Quote
                </SubmitButton>
              </div>

            </div>

          </div>
        </Form>
      </div>
    );
  }
}


CustomerDetails.contextType = AppContext;

export default CustomerDetails;   