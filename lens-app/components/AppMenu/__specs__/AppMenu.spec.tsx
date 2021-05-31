import React from 'react';
import { shallow } from 'enzyme';
import AppMenu from '../AppMenu';

let wrapper: any;
let props: any;

beforeEach(() => {
  props = {}
  wrapper = shallow(<AppMenu {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});