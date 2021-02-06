import { NextApiRequest, NextApiResponse } from 'next'
import screenshot from 'lib/screenshot'
import { getTicketData } from 'lib/db-admin'
import { SITE_URL } from 'lib/constants'

export default async function ticketImages(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { uid, type }
  } = req

  if (uid) {
    const ticketData = await getTicketData(uid)
    const file = await screenshot(
      `${SITE_URL}/ticket-image?nickname=${encodeURIComponent(
        ticketData?.nickname
      )}&wishes=${encodeURIComponent(ticketData?.wishes)}&type=${encodeURIComponent(`${type}`)}`
    )

    res.setHeader('Content-Type', `image/png`)
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    )
    res.statusCode = 200
    res.end(file)
  } else {
    res.status(404).send('Not Found')
  }
}
