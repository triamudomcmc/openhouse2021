import screenshot from '../../lib/screenshot'

const handler = async () => {
  await screenshot('http://localhost:3000/articles')
}

export default handler
