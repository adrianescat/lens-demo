import React from 'react';
import { shallow } from 'enzyme';
import Onboarding, { Props } from '../Onboarding';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = {
    title: 'title',
    description: 'description'
  }
  wrapper = shallow(<Onboarding {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});

describe('when is active', () => {
  beforeEach(() => {
    props = {
      title: 'title',
      description: 'description',
      isActive: true
    }
    wrapper = shallow(<Onboarding {...props} />);
  });

  test('should match snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
