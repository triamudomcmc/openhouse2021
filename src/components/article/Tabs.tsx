import React from 'react'

import { Clubs } from './Clubs'

const Tabs = ({ contents }) => {
  return (
    <div className="max-w-full md:w-8/12">
      <Clubs contents={contents} />
    </div>
  )
}

export default Tabs
