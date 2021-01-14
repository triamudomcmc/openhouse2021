import { format, utcToZonedTime } from 'date-fns-tz'

export const getTimestamp = (timestamp) => {
  const second = timestamp.seconds ? timestamp.seconds : timestamp._seconds
  const date = new Date(second * 1000)
  const bkkDate = utcToZonedTime(date, 'Asia/Bangkok')
  const dd = format(bkkDate, 'dd', { timeZone: 'Asia/Bangkok' })
  const tt = format(bkkDate, 'HH:mm', { timeZone: 'Asia/Bangkok' })
  return {
    date: parseInt(dd),
    time: tt,
  }
}
