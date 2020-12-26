import React from 'react'
import Router from 'next/router'

const Timer = () => {
  const [count, setCount] = React.useState(10)

  React.useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000)
    } else {
      Router.push('https://clubs.triamudom.ac.th')
    }
  }, [count])

  return (
    <div className="mt-4 text-gray-300 text-5s font-display">
      Redirect to{' '}
      <a
        className="hover:text-blue-300 hover:underline"
        href="https://clubs.triamudom.ac.th"
      >
        main site
      </a>{' '}
      in {count}
    </div>
  )
}

export default Timer
