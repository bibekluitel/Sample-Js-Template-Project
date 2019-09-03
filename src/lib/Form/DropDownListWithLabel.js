import React, { useEffect } from 'react';
import DropDownList from './DropDownLIst';

export default function DropDownListWithLabel(props) {

  useEffect(() => {

    props.isRequired && props.updateRule(props.name,'isRequired');
  }, []);

  return (<div style={{ display: "flex", flex: 1, flexDirection: 'column', padding: '10px 10px' }} className={props.wrapperStyle}>
    <label className={props.labelStyle} style={{ marginBottom: '10px' }}>
      {props.labelText} {props.isRequired && <span style={{ color: 'red' }}>*</span>}
    </label>
    <DropDownList {...props} />
  </div>)
}