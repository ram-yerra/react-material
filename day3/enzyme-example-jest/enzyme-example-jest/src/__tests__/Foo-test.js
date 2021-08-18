jest.unmock('../Foo');

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

import Foo from '../Foo';

describe('<Foo />', () => {
  
  it('renders a <p> with a static text', () => {
    const wrapper = shallow(<Foo/>);
    expect(wrapper.contains(<p>I am not a very smart component...</p>)).toBe(true);
  });
  
});