import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

let wrapper: any;
let props: any;

beforeEach(() => {
  props = { children: <div>Test</div> };
  wrapper = shallow(<Layout {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});