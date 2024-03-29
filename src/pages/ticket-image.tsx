import { Portrait, SimplePortrait, SimpleSquare, Square } from 'components/ticket/Visual'
import { useRouter } from 'next/router'
import React from 'react'

const TicketImage = () => {
  const { query } = useRouter()
  if (query.type === 'pot') {
    return (
      <Portrait
        width={1080}
        nickname={query.nickname ? query.nickname.toString() : undefined}
        wishes={query.wishes ? query.wishes.toString() : undefined}
      />
    )
  }

  if (query.type === 'sq') {
    return (
      <Square
        width={1080}
        nickname={query.nickname ? query.nickname.toString() : undefined}
        wishes={query.wishes ? query.wishes.toString() : undefined}
      />
    )
  }

  if (query.type === 'nwsq') {
    return (
      <SimpleSquare
        width={1080}
        nickname={query.nickname ? query.nickname.toString() : undefined}
      />
    )
  }

  if (query.type === 'nwpot') {
    return (
      <SimplePortrait
        width={1080}
        nickname={query.nickname ? query.nickname.toString() : undefined}
      />
    )
  }

  return <></>
}

export default TicketImage
