import React from 'react';
import { shallow } from 'enzyme';
import LensIcon, { Props } from '../LensIcon';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = { label: 'label', title: 'title' };
  wrapper = shallow(<LensIcon {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});