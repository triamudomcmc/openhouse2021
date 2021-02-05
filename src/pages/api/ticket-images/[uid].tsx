import { NextApiRequest, NextApiResponse } from 'next'
import screenshot from 'lib/screenshot'
import { getTicketData } from 'lib/db-admin'

export default async function ticketImages(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { uid }
  } = req
  const ticketData = await getTicketData(uid)
  const file = await screenshot(
    `http://localhost:3000/ticket-image?nickname=${encodeURIComponent(
      ticketData.nickname
    )}&wishes=${encodeURIComponent(ticketData.wishes)}&type=pot`
  )

  res.setHeader('Content-Type', `image/png`)
  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  )
  res.statusCode = 200
  res.end(file)
}
