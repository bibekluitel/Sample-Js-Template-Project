import React, { useEffect } from 'react';
import DropDownList from './DropDownLIst';
import Input from './Input';


const telephoneList = ['+61', '+1', '+977',]

const TelephoneInputWithLabel = (props) => {

  useEffect(() => {
    props.isRequired && props.updateRule(props.name, 'isRequired');
  }, []);

  return (<div style={{ display: "flex", flex: 1, flexDirection: 'column' }} className={props.wrapperStyle}>
    <label className={props.labelStyle} style={{ padding: '0px 10px' }}>
      {props.labelText}
    </label>
    <div style={{ display: 'flex', margin: '15px 0px 5px 0px', padding: '0px 15px' }}>
      <DropDownList style={{ marginRight: '5px' }} onChange={props.onChange} name='countrycode' >
        <option value=''> </option>
        {telephoneList.map(item => <option value={item}> {item}</option>)}
      </DropDownList>
      <Input {...props} />
    </div>

  </div>);
}

export default TelephoneInputWithLabel;


