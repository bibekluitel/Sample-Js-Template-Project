import React from 'react';
import CustomerDetails from './CustomerDetails';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as utilfunctions from './../../utils/commonfunctions';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('Check basic Rendering flow', () => {

  it('renders correctly', () => {
    const tree = shallow(<CustomerDetails />);

    expect(tree.find('div')).to.have.lengthOf.at.least(1);
    expect(tree.find('#firstname')).to.have.lengthOf(1);
    expect(tree.find('#lastname')).to.have.lengthOf(1);
    expect(tree.find('#amount')).to.have.lengthOf(1);
    expect(tree.find('#toCurrency')).to.have.lengthOf(1);
    expect(tree.find('#fromCurrency')).to.have.lengthOf(1);
  });

  it(' call Onsubmit the data on click', () => {

    const shallowComp = shallow(<CustomerDetails />);

   
    shallowComp.instance().onSubmit = jest.fn();
    shallowComp.update();

    const button = shallowComp.find('SubmitButton');

    button.simulate('click');

    // expect(shallowComp.instance().onSubmit.mock.calls.length).to.equal(1);

    const afterClicked = {
      isSubmitting: false
    }

    shallowComp.setState({ ...afterClicked });
    expect(shallowComp.instance().state).to.deep.equal(afterClicked);

    button.simulate('click');

    expect(shallowComp.instance().onSubmit.mock.calls.length).to.equal(0);
  })

  it('request correct data and redirects', () => {

      let shallowComp =  shallow(<CustomerDetails />)
      utilfunctions.submitData = jest.fn();
      const data = {
        fromCurrency: 'AUD', 
        toCurrency: 'USD', 
        amount: 2000
      };

      shallowComp.instance().onSubmit(data);

      expect(utilfunctions.submitData.mock.calls.length).to.equal(1);

      expect(utilfunctions.submitData.mock.calls[0][0]).to.deep.equal({
        from: data.fromCurrency,
        to: data.toCurrency, 
        amount: data.amount
      });
  })

})




