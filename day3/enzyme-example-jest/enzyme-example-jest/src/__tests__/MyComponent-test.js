jest.unmock('../MyComponent');

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import MyComponent from '../MyComponent';
import Foo from '../Foo';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<MyComponent />', () => {
  
  it('renders a header', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.contains(<h1>My Component</h1>)).toBe(true);
  });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo).length).toBe(3);
  });
  
  it('expects to change the status when clicking the button', () => {
    const wrapper = shallow(<MyComponent />);
    
    expect(wrapper.state().status).toBe(false);
    expect(wrapper.contains(<p>Status is {'Off'}</p>)).toBe(true);
  
    wrapper.find('button').simulate('click');
    
    expect(wrapper.state().status).toBe(true);
    expect(wrapper.contains(<p>Status is {'On'}</p>)).toBe(true);
  });
  
});