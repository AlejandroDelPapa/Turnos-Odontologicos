import type { NextApiRequest, NextApiResponse } from 'next'
import type { Alumno } from './types';
import { sql } from "@vercel/postgres";
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Alumno[]>
) {
  if (req.method === 'GET') {
    const { rows } = await sql`SELECT * from alumno`;

    res.status(200).json(rows.map((row) => ({
      id: row.id,
      firstName: row.first_name,
      lastName: row.last_name,
    })));
  }
}
