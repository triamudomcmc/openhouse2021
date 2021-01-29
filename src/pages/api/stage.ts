import ms from 'ms'
import { NextApiRequest, NextApiResponse } from 'next'
import { getStageStream } from 'lib/db-admin'

// Number of seconds to cache the API response for
const EXPIRES_SECONDS = 5

export default async function getStage(_: NextApiRequest, res: NextApiResponse) {
  try {
    const stream = await getStageStream()

    // Set caching headers
    const expires = new Date(Date.now() + ms(`${EXPIRES_SECONDS}s`))
    res.setHeader('Expires', expires.toUTCString())
    res.setHeader(
      'Cache-Control',
      `s-maxage=${EXPIRES_SECONDS}, immutable, must-revalidate, stale-while-revalidate`
    )

    return res.status(200).json(stream)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)

    return res.status(500).json({
      error: {
        code: 'server_error',
        message: 'Internal server error'
      }
    })
  }
}
