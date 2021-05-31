import React from 'react';
import { shallow } from 'enzyme';
import PopoverMenu, { Props } from '../PopoverMenu';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = {
    list: ['calendar', 'email'],
    children: <div>Test</div>,
  };
  wrapper = shallow(<PopoverMenu {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});

describe('when is read-only mode', () => {
  beforeEach(() => {
    props = {
      list: [{ level: 'label', value: 1 }, { level: 'label', value: 1 }],
      children: <div>Test</div>,
    };
    wrapper = shallow(<PopoverMenu {...props} />);
  });

  test('should match snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
