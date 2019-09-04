import React from 'react';
import ConversionResult from './ConversionResult';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

it('Should render according to props', () => {
  const context = {
    state: {}
  };
  const push = jest.fn();
  const wrapper = shallow(<ConversionResult history={{ push: push }} />, context);

  expect(push.mock.calls[0][0]).to.be.equal('customerdetails');
  expect(wrapper.find('.wrapper')).to.have.lengthOf(0);

  wrapper.setState({
    conversionDetails: {
      fromCurrency: 'AUD',
      toCurrency: 'USD'
    }
  })

  expect(wrapper.find('.wrapper')).to.have.lengthOf(1);
})

