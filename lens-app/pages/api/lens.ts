import type { NextApiRequest, NextApiResponse } from 'next';
import { LensList } from '../../types/lens';
import { lens } from '../../mocks/lens.mock';

export default (_: NextApiRequest, res: NextApiResponse<LensList>) => {
  res.status(200).json({ lens })
}