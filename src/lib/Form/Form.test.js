import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Form from './Form.js';

configure({ adapter: new Adapter() });


describe("testing form function", () => {

    it('validatde all isRequired', ()=> {
      const shallowComp = shallow(<Form/>, {});

      expect(shallowComp.instance().isNotEmpty('')).to.be.false;
      expect(shallowComp.instance().isNotEmpty(0)).to.be.true;
    })

    it('validatde all isNumber', ()=> {
      const shallowComp = shallow(<Form/>, {});

      expect(shallowComp.instance().isNumber('')).to.be.false;
      expect(shallowComp.instance().isNumber(0)).to.be.true;
    })
    
}) 

