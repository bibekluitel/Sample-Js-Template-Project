import React from 'react';

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
    // console.log(this.validateData())

    // console.log(this.state, this.ruleList)
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

    return this.props.children({
      onChange: this.updateKey,
      getValue: this.getValue,
      getAllValue: this.getAllValue,
      updateRule: this.updateRule,
    });

    return this.isObjectFunction(this.props.children)
      ?
      this.props.children({
        onChange: this.updateKey,
        getValue: this.getValue,
      })
      :
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
  }

}

export default Form;