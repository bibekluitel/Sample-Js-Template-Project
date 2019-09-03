import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './style.module.css';
import './../../App.css';
import { Form, InputWithLabel, TelephoneInputWithLabel, DropDownListWithLabel } from './../../lib/Form';
import { PrimaryButton } from './../../lib/Button';
import { submitData } from './../../utils/commonfunctions';
import AppContext from './../../AppContext';

class CustomerDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = async (value) => {

    if (!value) {

      alert('Please Fill in all required Fields');
      return
    }

    this.setState({ isSubmitting: true });

    const result = await submitData({ from: value.fromCurrency, to: value.toCurrency, amount: value.amount });
    
    if(!result) {
      
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
          {({ onChange, getAllValue, updateRule }) => (<div className={styles.formWrapper}>
            <div className={styles.customerinfo}>
              <div className={`${styles.row}`}>
                <InputWithLabel labelText='First Name' isRequired labelPosition='top' onChange={onChange} name='firstname' updateRule={updateRule} />
                <InputWithLabel labelText="Last Name" isRequired labelPosition='top' onChange={onChange} name='lastname' updateRule={updateRule} />
              </div>
              <div className={styles.row}>
                <InputWithLabel labelText='Email' labelPosition='top' name='email' />
              </div>
              <div className={styles.row}>
                <TelephoneInputWithLabel labelText="Phone Number" labelPosition='top' onChange={onChange} name='telephone' />
              </div>
            </div>

            <div className={styles.transactioninfo}>
              <div className={styles.row}>
                <DropDownListWithLabel isRequired labelText='From Currency' onChange={onChange} name="fromCurrency" updateRule={updateRule} >
                  {/* TODO: get a dynamic map for currency list */}
                  <option value=''> </option>
                  <option value='AUD'> Australian Dollar(AUD) </option>
                  <option value='USD'> United State Dollar(USD) </option>
                  <option value='GBP'> Pound Sterling(GBP) </option>
                </DropDownListWithLabel>

                <DropDownListWithLabel isRequired labelText='To Currency' onChange={onChange} name="toCurrency" updateRule={updateRule}>
                  {/* TODO: get a dynamic map for currency list */}
                  <option value=''> </option>
                  <option value='AUD'> Australian Dollar(AUD) </option>
                  <option value='USD' > United State Dollar(USD) </option>
                  <option value='GBP'> Pound Sterling(GBP) </option>
                </DropDownListWithLabel>
              </div>

              <div className={styles.row}>
                <InputWithLabel isRequired labelText="Amount" onChange={onChange} name="amount" updateRule={updateRule} />
              </div>
              <div className={styles.buttonWrapper}>
                <PrimaryButton onClick={() => !this.state.isSubmitting && this.onSubmit(getAllValue())} >
                  Get Quote
                </PrimaryButton>
              </div>

            </div>

          </div>)}
        </Form>
      </div>
    );
  }
}


CustomerDetails.contextType = AppContext;
export default CustomerDetails;   