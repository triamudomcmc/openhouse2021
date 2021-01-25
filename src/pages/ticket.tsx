import { Layout } from 'components/common/Layout'
import { Potrait } from 'components/ticket/Visual'
import React from 'react'

const Ticket = () => (
  <Layout>
    <div className="w-full h-full py-16">
      <div className="flex justify-center">
        <Potrait width={270} />
      </div>
    </div>
  </Layout>
)

export default Ticket
