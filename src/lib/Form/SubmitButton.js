import React, { useContext } from 'react';
import FromContext from './FormContext';
import PrimaryButton from './../Button/PrimaryButton';

export default function SubmitButton(props) {
  // TODO: Button should not be inisde form component 
  // problem : need to find a way to  hook any button component with ofrm COntext  so that any button can be composed with form Context
  const context = useContext(FromContext);

  return <PrimaryButton onClick={() => !props.isDisabled && props.onSubmit(context.getAllValue())} {...props}>
    {props.children}
  </PrimaryButton>
}