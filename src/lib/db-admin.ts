import { db } from './firebase-admin'

import TimetableData from 'types/Timetable'
import { getTimestamp } from 'utils/getTimestamp'

export async function getAllLiveSchedule(): Promise<TimetableData[]> {
  let ref = db.collection('experiment').orderBy('startTime', 'asc')

  const snapshot = await ref.get()
  const list: TimetableData[] = []

  snapshot.forEach(doc => {
    const data = doc.data()

    list.push({
      id: doc.id,
      startTime: getTimestamp(data.startTime),
      endTime: getTimestamp(data.endTime),
      title: data.title,
      club: data.by
    })
  })

  return list

  /*
  return []
   */
}

export async function getStageStream(): Promise<any> {
  const ref = db.collection('stage').doc('main')
  const doc = await ref.get()
  const data = doc.data()

  return {
    stream: data.stream
  }

  /*
  return {}
   */
}

export async function getTicketData(uid) {
  const ref = db.collection('users').doc(uid)
  const doc = await ref.get()
  const data = doc.data()

  return {
    nickname: data.nickname,
    wishes: data.wishes,
    haveWishes: data.haveWishes
  }
}
