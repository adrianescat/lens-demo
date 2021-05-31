import React from 'react';
import { shallow } from 'enzyme';
import UnderConstruction from '../UnderConstruction';

let wrapper: any;
let props: any;

beforeEach(() => {
  props = {};
  wrapper = shallow(<UnderConstruction {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});