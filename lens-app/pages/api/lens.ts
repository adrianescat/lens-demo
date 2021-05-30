import type { NextApiRequest, NextApiResponse } from 'next';
import { lens } from '../../mocks/lens.mock';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ lens })
}