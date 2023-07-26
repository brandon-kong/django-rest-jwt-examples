// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '@/lib/auth'
import { useCookies } from 'react-cookie'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const [cookies, setCookie, removeCookie] = useCookies(['test'])
  setCookie('test', 'test', {})
    //setCookie('test', 'test', {})
  res.status(200).json({ name: 'John Doe' })
}
