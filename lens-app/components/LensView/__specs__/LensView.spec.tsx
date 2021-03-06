import React from 'react';
import { shallow } from 'enzyme';
import LensView, { Props } from '../LensView';

let wrapper: any;
let props: Props;

const lens = {
  "id": "91298321783",
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
  "patientScore": 114.562,
  "summary": "Medical History",
  "summaryLabel": "history",
  "summaryScore": 0.4,
  "urgent": true,
  "lastUpdated": "2021-03-12T00:00:00",
  "files": [
    {
      "order": 0,
      "id": "91298321783_0",
      "width": 1700,
      "height": 2200
    },
    {
      "order": 1,
      "id": "91298321783_1",
      "width": 1700,
      "height": 2200
    },
    {
      "order": 2,
      "id": "91298321783_2",
      "width": 1700,
      "height": 2200
    }
  ],
  "flags": [
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
  "problems": [
    {
      "name": "SleepApnea",
      "humanName": "Sleep apnea",
      "icd10Code": "G47.30",
      "confidence": 1.0,
      "weight": 0.8,
      "page": 1,
      "box": {
        "t": 45,
        "b": 780,
        "l": 60,
        "r": 735
      }
    },
    {
      "name": "GERD",
      "humanName": "Acid reflux",
      "icd10Code": "G21",
      "confidence": 0.9,
      "weight": 0.7,
      "page": 1,
      "box": {
        "t": 32,
        "b": 565,
        "l": 54,
        "r": 660
      }
    }
  ],
  "allergies": [
    {
      "name": "Penacillin",
      "humanName": "Penacillin",
      "drugBankCode": "DB01053",
      "confidence": 1.0,
      "weight": 1.2,
      "page": 1,
      "box": {
        "t": 52,
        "b": 897,
        "l": 82,
        "r": 1010
      }
    }
  ],
  "medications": [
    {
      "name": "Aspirin",
      "humanName": "Aspirin",
      "drugBankCode": "DB00945",
      "confidence": 1.0,
      "weight": 0.5,
      "page": 2,
      "box": {
        "t": 64,
        "b": 1107,
        "l": 20,
        "r": 375
      },
      "moreInfo": [
        {
          "label": "Dose",
          "value": "80MG"
        },
        {
          "label": "Dispense",
          "value": "30"
        },
        {
          "label": "Refill",
          "value": "1"
        }
      ]
    }
  ]
}

beforeEach(() => {
  props = {
    data: lens,
  }
  wrapper = shallow(<LensView {...props} />);
});

test('should match snapshots', () => {
  expect(wrapper).toMatchSnapshot();
});