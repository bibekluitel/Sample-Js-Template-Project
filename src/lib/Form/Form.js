import React from 'react';
import FormContext from './FormContext';
import { isNumber } from 'util';


class Form extends React.PureComponent {
  constructor(props) {

    super(props);
    this.state = {};
    this.ruleList = {};
  }

  // TODO; use React Context to pass the function into the form components
  // remove the passing of functions through the components using it 

  updateKey = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  isNotEmpty = (value) => !!(value === 0 || value)

  isNumber = (value) => !isNaN(value) && !(value === '')

  isTelephoneNum = (value) => `${value}`.length >9 && `${value}`.length<=10

  validateData = (ruleList, state) => {

    //  need to check validation and parsing the input for scripting
    // checking if the value is empty
    const rulesHM = {
      isRequired: this.isNotEmpty,
      isNumber: this.isNumber, 
      isTelephone: this.isTelephoneNum
    }

    const validationMessage = {
      isRequired: "Please fill all the required Field.",
      isNumber: "Please Enter the numbers only.",
      isTelephone: "Please provide the correct Telephone Number"
    }

    const nameList = Object.keys(ruleList)

    for (let i = 0; i < nameList.length; i++) {

      let key = nameList[i];
      let data = state[key];
      let rules = ruleList[key];


      for (let j = 0; j < rules.length; j++) {

        const ruleFunc = rulesHM[rules[j]];

        if (!ruleFunc(data)) {
          return validationMessage[rules[j]];
        }
      }
    }
    return true;
  }

  getAllValue = (key) => {
    const validationresult = this.validateData(this.ruleList, this.state);
    if (validationresult === true) {
      return this.state
    }
    return validationresult
  }

  getValue = (key) => {

    return this.state[key];
  }

  updateRule = (name, rule) => {

    // Currently will be a array of rules
    this.ruleList[name] = this.ruleList[name] ? [...this.ruleList[name], rule] : [rule]
  }

  render() {
    return (<FormContext.Provider value={{
      onChange: this.updateKey,
      getValue: this.getValue,
      getAllValue: this.getAllValue,
      updateRule: this.updateRule,
    }}>
      {this.props.children}
    </FormContext.Provider>);
  }

}

export default Form;