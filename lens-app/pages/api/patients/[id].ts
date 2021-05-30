import type { NextApiRequest, NextApiResponse } from 'next';
import { patients } from '../../../mocks/patients.mock';
import { Patient } from '../../../types/lens';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const patient = patients.find((patient: Patient) => patient.emrId.toLowerCase() === id.toLowerCase());

  if (patient) {
    res.status(200).json({ patient: patients.find((patient: Patient) => patient.emrId.toLowerCase() === id.toLowerCase()) })
  } else {
    res.status(200).json({})
  }
}