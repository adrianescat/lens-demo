import React from 'react';
import { shallow } from 'enzyme';
import LensBox, { Props } from '../LensBox';

let wrapper: any;
let props: Props;

const lens = {
  "id": "5221291239183",
  "patient": {
    "dateOfBirth": "1940-06-12T00:00:00",
    "emrId": "MT00034",
    "firstName": "Michael",
    "homePhone": "650-477-4676",
    "lastName": "Thompson",
    "middleName": "B",
    "mobilePhone": "",
    "workPhone": ""
  },
  "patientScore": 70.97112000000001,
  "summary": "Metabolic Lab Report",
  "summaryLabel": "metabolic_lab_report",
  "summaryScore": 1.3,
  "urgent": false,
  "lastUpdated": "2020-03-12T00:00:00",
  "files": [
    {
      "order": 0,
      "id": "5221291239183_0",
      "width": 1700,
      "height": 2200
    }
  ]
}

beforeEach(() => {
  props = { data: lens };
  wrapper = shallow(<LensBox {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});