import React from 'react';
import { shallow } from 'enzyme';
import Header, { Props } from '../Header';

let wrapper: any;
let props: any;

beforeEach(() => {
  props = { user: { id: 'asd', name: 'Adrian Escat' } };
  wrapper = shallow(<Header {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});