/**
 * @author Oguntuberu Nathan O.
 */

import React from 'react';
import '../setup'
import { shallow } from 'enzyme';
import HeaderComponent from '../../src/components/header/index';

describe("HeaderComponent Test", () => {
    it ("renders correctly", () => {
        const wrapper = shallow(<HeaderComponent/>);
        expect(wrapper.name()).toEqual("header");
    })

    
})