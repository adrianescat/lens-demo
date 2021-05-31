import React from 'react';
import { shallow } from 'enzyme';
import LensInfoGroup, { Props } from '../LensInfoGroup';

let wrapper: any;
let props: Props;

beforeEach(() => {
  props = {
    groupName: 'groupName',
    list: [
      {
        "name": "PrimaryCareProvider/FollowUp",
        "humanName": "Follow up",
        "confidence": 1.0,
        "weight": 0.7,
        "page": 0,
        "box": {
          "t": 40,
          "b": 720,
          "l": 90,
          "r": 1100
        }
      },
      {
        "name": "CardiacFaliure/Symptoms",
        "humanName": "Heart failure",
        "confidence": 1.0,
        "weight": 1.2,
        "page": 0,
        "box": {
          "t": 80,
          "b": 1320,
          "l": 20,
          "r": 635
        }
      }
    ],
    listDone: [],
    hasActions: true,
    isDoneList: false,
    actions: ['email', 'calendar'],
    activeDot: 'activeDot',
    listSetter: jest.fn(),
    handleClearDot: jest.fn(),
    listDoneSetter: jest.fn(),
    handleDotClick: jest.fn(),
    handleRemoveItem: jest.fn(),
    handleMoveItem: jest.fn(),
  }
  wrapper = shallow(<LensInfoGroup {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});