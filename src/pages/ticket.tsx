import { Layout } from 'components/common/Layout'
import TicketVisual from 'components/ticket/Visual'

const Ticket = () => (
  <Layout>
    <div className="w-full h-full py-16 ">
      <div className="mx-auto">
        <TicketVisual />
      </div>
    </div>
  </Layout>
)

export default Ticket
