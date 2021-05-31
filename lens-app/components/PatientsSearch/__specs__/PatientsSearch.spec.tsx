import React from 'react';
import { shallow } from 'enzyme';
import PatientsSearch from '../PatientsSearch';

let wrapper: any;
let props: any;

beforeEach(() => {
  props = {};
  wrapper = shallow(<PatientsSearch {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});