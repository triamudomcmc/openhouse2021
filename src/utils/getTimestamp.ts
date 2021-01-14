import { format } from 'date-fns-tz'

export const getTimestamp = (timestamp) => {
  const second = timestamp.seconds ? timestamp.seconds : timestamp._seconds
  const date = new Date(second * 1000)
  const dd = format(date, 'dd', { timeZone: 'Asia/Bangkok' })
  const tt = format(date, 'HH:mm', { timeZone: 'Asia/Bangkok' })
  return {
    date: parseInt(dd),
    time: tt,
  }
}
