import type { NextApiRequest, NextApiResponse } from 'next';
import { patients } from '../../mocks/patients.mock';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ patients })
}