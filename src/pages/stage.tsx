import React from 'react'

import { Layout } from 'components/common/Layout'
import { StageContainer } from 'components/Stage'

import { getStageStream } from 'lib/db-admin'
import { GetStaticProps } from 'next'
import Stream from 'types/Stream'

type Props = {
  stream: Stream
}

const Stage = ({ stream }) => {
  return (
    <Layout>
      <StageContainer stream={stream} />
    </Layout>
  )
}

export default Stage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stream = await getStageStream()

  if (!stream) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      stream,
    },
    revalidate: 60,
  }
}
