export const getTimestamp = (timestamp: any) => {
  const second = timestamp.seconds ? timestamp.seconds : timestamp._seconds
  const time = new Date(second * 1000)
  const dd = (time.getDate() < 10 ? '0' : '') + time.getDate()
  const tt = time.toString().substring(16, 24)
  return {
    date: parseInt(dd),
    time: tt,
  }
}
