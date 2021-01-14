export default interface TimetableData {
  id: string
  startTime: DT
  endTime: DT
  title: string
  club: string
}

interface DT {
  date: number
  time: string
}
