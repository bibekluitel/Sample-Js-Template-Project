import React, { useEffect, useContext } from 'react';
import DropDownList from './DropDownLIst';
import Input from './Input';
import FormContext from './FormContext';


const telephoneList = ['+61', '+1', '+977',]

const TelephoneInputWithLabel = (props) => {

  const context = useContext(FormContext);

  useEffect(() => {
    props.isRequired && context.updateRule(props.name, 'isRequired');
    props.rules && props.rules.map((r)=> context.updateRule(props.name, r))
  }, []);

  return (<div style={{ display: "flex", flex: 1, flexDirection: 'column' }} className={props.wrapperStyle}>
    <label className={props.labelStyle} style={{ padding: '0px 10px' }}>
      {props.labelText}
    </label>
    <div style={{ display: 'flex', margin: '15px 0px 5px 0px', padding: '0px 15px' }}>
      <DropDownList style={{ marginRight: '5px' }} onChange={context.onChange} name='countrycode' >
        <option value=''> </option>
        {telephoneList.map(item => <option value={item}> {item}</option>)}
      </DropDownList>
      <Input {...props} {...context} />
    </div>

  </div>);
}

export default TelephoneInputWithLabel;


