import type { NextApiRequest, NextApiResponse } from 'next';
import { lens } from '../../../mocks/lens.mock';
import { Lens } from '../../../types/lens';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.patientId as string;
  const results = (lens as Array<any>).filter((lens: Lens) => lens.patient.emrId.toLowerCase() === id.toLowerCase());

  if (results.length) {
    res.status(200).json({ lens: results })
  } else {
    res.status(200).json({ lens: [] })
  }
}