import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  id: number,
  firstName: string,
  lastName: string,
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
  if (req.method === 'GET') {
    // the setTimeout is just to simulate an async request with 2 seconds delay
    setTimeout(() => {
      res.status(200).json([
        {
          id: 1,
          firstName: 'Juan',
          lastName: 'Perez',
        },
        {
            id: 2,
            firstName: 'Ana',
            lastName: 'Garcia',
          }
      ])
    }, 2000);
  }
}