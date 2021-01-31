import { Layout } from 'components/common/Layout'
import {Potrait, Square} from 'components/ticket/Visual'
import React from 'react'

const Ticket = () => (
  <Layout>
    <div className="w-full h-full py-16">
      <div className="flex justify-center">
        <Square width={600} />
      </div>
    </div>
  </Layout>
)

export default Ticket
