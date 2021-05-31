import React from 'react';
import { shallow } from 'enzyme';
import Title, { Props } from '../Title';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = {};
  wrapper = shallow(<Title {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});