import fs from 'fs'
import admin from 'firebase-admin'
import Papa from 'papaparse'
import { getUnixTime } from 'date-fns'
import * as cred from './cred.json'

// Get cred.json from firebase
admin.initializeApp({
  credential: admin.credential.cert(cred as any),
})

const db = admin.firestore()

const main = (date: number) => {
  const csvPath: string = ''

  const data: Buffer = fs.readFileSync(csvPath)
  const collection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData> = db.collection(
    'live'
  )

  Papa.parse(data.toString(), {
    complete: (result) => {
      result.data.forEach((value, index, array) => {
        let res: Array<string> = <Array<string>>value

        let time: Array<string> = res[1].split(':')
        let unix: number

        if (index !== 0) {
          unix = getUnixTime(
            new Date(
              2021,
              2,
              date,
              parseInt(time[0]),
              parseInt(time[1]),
              time.length > 2 ? parseInt(time[2]) : 0
            )
          )

          const doc = {
            by: res[4],
            startTime: unix,
            endTime:
              array[index + 1] === ''
                ? unix +
                  parseInt((<Array<string>>array[index + 1])[2]) +
                  parseInt(res[2]) * 60
                : unix + parseInt(res[2]) * 60,
            title: res[5],
          }

          // for debugging
          console.log(doc)

          if (res[4] !== '') {
            collection.add(doc)
          }
        }
      })
    },
  })
}

main(12)
