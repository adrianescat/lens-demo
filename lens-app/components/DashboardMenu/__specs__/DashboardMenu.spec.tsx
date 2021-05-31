import React from 'react';
import { shallow } from 'enzyme';
import DashboardMenu, { Props } from '../DashboardMenu';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = { setCategory: jest.fn() }
  wrapper = shallow(<DashboardMenu {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});