// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /test': (req: Request, res: Response) => {
    res.status(200).send('P&K8');
  },
};
