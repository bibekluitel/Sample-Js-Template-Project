import React from 'react';
import FormContext from './FormContext';

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

  validateData = () => {

    //  need to check validation and parsing the input for scripting
    // checking if the value is empty
    const isNotEmpty = (value) => (value === 0 || value)

    const rulesHM = {
      isRequired: isNotEmpty
    }

    const nameList = Object.keys(this.ruleList)

    for (let i = 0; i < nameList.length; i++) {

      let key = nameList[i];
      let data = this.state[key];
      let rules = this.ruleList[key];

      for (let j = 0; j < rules.length; j++) {

        const ruleFunc = rulesHM[rules[j]];

        if (!ruleFunc(data)) {
          return false;
        }
      }
    }
    return true;
  }

  getAllValue = (key) => {

    if (this.validateData()) {
      return this.state
    }
  }

  getValue = (key) => {

    return this.state[key];
  }

  isObjectFunction = (obj) => {

    return Object.prototype.toString.call(obj) === '[object function]';
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