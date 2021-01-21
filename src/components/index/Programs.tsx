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
    <div className="w-4/5 md:w-7/12">
      <div>
        <h1 className="font-black text-center text-blue-400 mt-16 md:mt-48 text-3xl md:text-7xl">
          สายการเรียน
        </h1>
      </div>
      <div className="flex md:flex-col flex-row justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Scimath className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">วิทย์-คณิต</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Kamnuan className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์คำนวณ</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Chinese className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์จีน</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Korea className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์เกาหลี</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <German className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์เยอรมัน</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Spain className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์สเปน</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <French className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์ฝรั่งเศส</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Janpan className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">ศิลป์ญี่ปุ่น</h1>
          </div>
        </div>

      </div>
      <div>
        <h1 className="font-black text-center text-blue-400 mt-12 md:mt-36 text-3xl md:text-7xl">
          Gifted
        </h1>
      </div>
      <div className="flex md:flex-col flex-row justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Gsci className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">Gifted-Science</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Gmath className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">Gifted-Math</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Gthai className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">Gifted-Thai</h1>
          </div>
          <div className="flex flex-col mt-2 mx-1 justify-center items-center text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl w-32 h-20 md:w-60 md:h-36">
            <Geng className="w-9 md:w-18 h-9 md:h-18" />
            <h1 className="mt-2">Gifted-English</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Programs
