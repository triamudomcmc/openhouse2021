import inputData from "./types/inputData";
import {useEffect, useState} from "react";

const Timetable = ({data,date,... restProps}) => {

  const [dataTable, setDataTable] = useState(<div></div>)

  useEffect(() => {
    const input: inputData = data
    input.forEach((value, index) => {
      setDataTable(prevState =>
        <>
          {prevState}
          <div className="flex flex-row rounded-md shadow-md my-2 py-2 px-5">
            <div className="w-1/2 flex items-center pr-5 justify-center text-xs xs:text-base">
              <span>{value.starttime} - {value.endtime}</span>
            </div>
            <div className="w-full flex flex-col leading-4">
              <span className="font-bold text-xs xs:text-base text-gray-800">{value.title}</span>
              <span className="font-normal text-xxs xs:text-xs text-gray-700">{value.club}</span>
            </div>
          </div>
        </>)
    })
  },[])

  let heading = <span></span>
  if (date === "12") {
    heading = <span className="flex w-16 h-16 rounded-full shadow-sm bg-gradient-to-bl from-purple-200 to-blue-25 justify-center items-center font-black text-3xl text-white">12</span>
  }else if (date === "13") {
    heading = <span className="flex w-16 h-16 rounded-full shadow-sm bg-gradient-to-br from-red-200 to-yellow-25 justify-center items-center font-black text-3xl text-white">13</span>
  }
  return (
    <div className="flex flex-col" {...restProps}>
      <div>
        <div className="flex flex-col items-center justify-center">
          {heading}
          <span>กุมภาพันธ์</span>
        </div>
        {dataTable}
      </div>
    </div>
  )
}

export default Timetable