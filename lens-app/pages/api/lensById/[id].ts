import type { NextApiRequest, NextApiResponse } from 'next';
import { lens } from '../../../mocks/lens.mock';
import { Lens } from '../../../types/lens';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const result = (lens as Array<any>).find((lens: Lens) => lens.id.toLowerCase() === id.toLowerCase());

  if (result) {
    res.status(200).json({ lens: result })
  } else {
    res.status(200).json({})
  }
}