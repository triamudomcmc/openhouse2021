import React from 'react'
import {
  Scimath,
  Kamnuan,
  Chinese,
  Korea,
  German,
  Spain,
  French,
  Janpan,
  Gsci,
  Gmath,
  Gthai,
  Geng,
} from '../../assets/vectors/Flags'

const Programs = () => {
  return (
    <div className="md:w-7/12">
      <div>
        <h1 className="font-black text-center text-blue-400 mt-16 md:mt-48 text-3xl md:text-7xl">
          สายการเรียน
        </h1>
      </div>
      <div className="flex md:flex-col flex-row justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <Scimath className="h-9 md:h-24" />
              <h1 className="mt-2">วิทย์-คณิต</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <Kamnuan className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์คำนวณ</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <Chinese className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์จีน</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <Korea className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์เกาหลี</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <German className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์เยอรมัน</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <Spain className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์สเปน</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <French className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์ฝรั่งเศส</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1 justify-center items-center px-16 px-2 md:px-12 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-20 mb-4 md:py-6 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
            <div className="flex flex-col justify-center items-center mr-0">
              <Janpan className="h-9 md:h-24" />
              <h1 className="mt-2">ศิลป์ญี่ปุ่น</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-black text-center text-blue-400 mt-12 md:mt-36 text-3xl md:text-7xl">
          Gifted
        </h1>
      </div>
      <div className="flex md:flex-col flex-row justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-row">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-row md:flex-col flex-1 justify-center items-center px-16 px-2 md:px-8 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-10 md:py-6 mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
              <div className="flex flex-col w-38 justify-center items-center mr-0">
                <Gsci className="h-9 md:h-24" />
                <h1 className="mt-2">Gifted-Science</h1>
              </div>
            </div>
            <div className="flex flex-row md:flex-col flex-1 justify-center items-center px-16 px-2 md:px-8 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-10 md:py-6 mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
              <div className="flex flex-col w-38 justify-center items-center mr-0">
                <Gmath className="h-9 md:h-24" />
                <h1 className="mt-2">Gifted-Math</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-row md:flex-col flex-1 justify-center items-center px-16 px-2 md:px-8 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-10 md:py-6 mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
              <div className="flex flex-col w-38 justify-center items-center mr-0">
                <Gthai className="h-9 md:h-24" />
                <h1 className="mt-2">Gifted-Thai</h1>
              </div>
            </div>
            <div className="flex flex-row md:flex-col flex-1 justify-center items-center px-16 px-2 md:px-8 py-4 md:py-8 w-16 h-16 md:w-44 md:h-44 mx-3 font-semibold md:px-10 md:py-6 mb-4 md:mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
              <div className="flex flex-col w-38 justify-center items-center mr-0">
                <Geng className="h-9 md:h-24" />
                <h1 className="mt-2">Gifted-English</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs
