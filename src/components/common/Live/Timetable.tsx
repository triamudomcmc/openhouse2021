import TimetableData from 'types/Timetable'

interface ITimetableProps {
  data: TimetableData[]
  date: number
}

const Timetable: React.FC<ITimetableProps> = ({ data, date, ...restProps }) => {
  const filtered = data.filter(val => val.startTime.date === date)

  let heading: React.ReactNode
  let i = 0

  if (date === 12) {
    heading = (
      <div className="rounded-full bg-gradient-to-r from-blue-70 via-purple-450 to-red-250">
        <span className="flex items-center justify-center py-2 text-xl font-black text-white px-14 whitespace-nowrap md:py-4 md:px-24 md:text-3xl">
          12 FEBRUARY 2021
        </span>
      </div>
    )
  } else if (date === 13) {
    heading = (
      <div className="rounded-full bg-gradient-to-r from-blue-70 via-purple-450 to-red-250">
        <span className="flex items-center justify-center py-2 text-xl font-black text-white px-14 whitespace-nowrap md:py-4 md:px-24 md:text-3xl">
          13 FEBRUARY 2021
        </span>
      </div>
    )
  }

  const table = filtered.map((value: TimetableData) => {
    i++
    return i === 2 ? (
      <div className="flex flex-row px-3 py-2 rounded-md shadow-md" key={value.id}>
        <div className="flex items-center justify-center w-1/2 pr-5 text-smoxs sm:text-base">
          <span className="font-semibold text-gray-600">
            {value.startTime.time} - {value.endTime.time}
          </span>
        </div>
        <div className="flex flex-col w-full leading-4">
          <span className="text-xs font-semibold text-gray-800 sm:text-base">{value.title}</span>
          <span className="text-xs font-normal text-gray-700 sm:text-sm">{value.club}</span>
        </div>
      </div>
    ) : (
      <div className="flex flex-row px-3 py-2 rounded-md shadow-md" key={value.id}>
        <div className="flex items-center justify-center w-1/2 pr-5 text-smoxs sm:text-base">
          <span className="font-semibold text-gray-600">
            {value.startTime.time} - {value.endTime.time}
          </span>
        </div>
        <div className="flex flex-col w-full leading-4">
          <span className="text-xs font-semibold text-gray-800 sm:text-base">{value.title}</span>
          <span className="text-xs font-normal text-gray-700 sm:text-sm">{value.club}</span>
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col w-full max-w-2xl px-4 mt-10 md:mt-16 font-display" {...restProps}>
      <div>
        <div className="flex flex-col items-center justify-center">{heading}</div>
        <div className="py-8 px-2 mt-8 space-y-4 overflow-custom scroll-hidden h-table">
          {table}
        </div>
      </div>
    </div>
  )
}

export default Timetable
