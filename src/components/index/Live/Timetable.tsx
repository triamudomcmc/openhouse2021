import TimetableData from 'types/Timetable'

interface ITimetableProps {
  data: TimetableData[]
  date: number
}

const Timetable: React.FC<ITimetableProps> = ({ data, date, ...restProps }) => {
  const filtered = data.filter((val) => val.startTime.date === date)

  let heading: React.ReactNode

  if (date === 12) {
    heading = (
      <span className="flex items-center justify-center w-16 h-16 text-3xl font-black text-white rounded-full shadow-sm bg-gradient-to-bl from-purple-200 to-blue-25">
        12
      </span>
    )
  } else if (date === 13) {
    heading = (
      <span className="flex items-center justify-center w-16 h-16 text-3xl font-black text-white rounded-full shadow-sm bg-gradient-to-br from-red-200 to-yellow-25">
        13
      </span>
    )
  }

  return (
    <div
      className="flex flex-col w-full max-w-2xl px-4 mt-12 font-display"
      {...restProps}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          {heading}
          <span>กุมภาพันธ์</span>
        </div>
        <div className="mt-4 space-y-4">
          {filtered.map((value: TimetableData) => (
            <div
              className="flex flex-row px-3 py-2 rounded-md shadow-md"
              key={value.id}
            >
              <div className="flex items-center justify-center w-1/2 pr-5 text-xs sm:text-base">
                <span>
                  {value.startTime.time} - {value.endTime.time}
                </span>
              </div>
              <div className="flex flex-col w-full leading-4">
                <span className="text-xs font-semibold text-gray-800 sm:text-base">
                  {value.title}
                </span>
                <span className="text-xs font-normal text-gray-700 sm:text-sm">
                  {value.club}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timetable
