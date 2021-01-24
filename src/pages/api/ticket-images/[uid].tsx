import { NextApiRequest, NextApiResponse } from 'next'
import screenshot from 'lib/screenshot'

export default async function ticketImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file = await screenshot('http://172.25.116.108:3000/ticket-image')
  res.setHeader('Content-Type', `image/png`)
  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  )
  res.statusCode = 200
  res.end(file)
}
