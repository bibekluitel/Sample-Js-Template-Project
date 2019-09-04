import React, { useEffect, useContext } from 'react';
import Input from './Input';
import FormContext from './FormContext';

export default function InputWithLabel(props) {

  const context = useContext(FormContext);

  useEffect(() => {
    props.isRequired && context.updateRule(props.name, 'isRequired');
    props.rules && props.rules.map((r)=> context.updateRule(props.name, r))
  }, []);

  return (<div style={{ display: "flex", flex: 1, flexDirection: 'column', padding: '10px 10px' }} className={props.wrapperStyle}>
    <label className={props.labelStyle} style={{ marginBottom: '10px' }}>
      {props.labelText} {props.isRequired && <span style={{ color: 'red' }}>*</span>}
    </label>
    <Input {...props} {...context} />
  </div>)
}