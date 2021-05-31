import React from 'react';
import { shallow } from 'enzyme';
import UserMenu, { Props } from '../UserMenu';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = { user: { id: 'asd', name: 'Adrian Escat' } };
  wrapper = shallow(<UserMenu {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});