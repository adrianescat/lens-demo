import React from 'react';
import { shallow } from 'enzyme';
import Dot, { Props } from '../Dot';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = {
    name: 'dot',
    isActive: false,
    top: 90,
    left: 90,
    onClick: jest.fn(),
  }
  wrapper = shallow(<Dot {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});

describe('when is active', () => {
  beforeEach(() => {
    props = {
      name: 'dot',
      isActive: true,
      top: 90,
      left: 20,
      onClick: jest.fn(),
    }
    wrapper = shallow(<Dot {...props} />);
  });

  test('should match snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
