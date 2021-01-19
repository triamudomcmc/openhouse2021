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
      <div className="flex flex-wrap justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <Scimath />
            <h1 className="mt-2">วิทย์-คณิต</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <Kamnuan />
            <h1 className="mt-2">ศิลป์คำนวน</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <Chinese />
            <h1 className="mt-2">ศิลป์จีน</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <Korea />
            <h1 className="mt-2">ศิลป์เกาหลี</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <German />
            <h1 className="mt-2">ศิลป์เยอรมัน</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <Spain />
            <h1 className="mt-2">ศิลป์สเปน</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <French />
            <h1 className="mt-2">ศิลป์ฝรั่งเศส</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-12 py-4 md:py-8 mx-3 font-semibold md:px-20 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col justify-center items-center mr-0">
            <Janpan />
            <h1 className="mt-2">ศิลป์ญี่ปุ่น</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-black text-center text-blue-400 mt-12 md:mt-36 text-3xl md:text-7xl">
          Gifted
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8 md:mt-12 font-display">
        <div className="flex flex-col flex-1 justify-center items-center px-8 py-4 md:py-8 mx-3 font-semibold md:px-10 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col w-38 justify-center items-center mr-0">
            <Gsci />
            <h1 className="mt-2">Gifted-Science</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-8 py-4 md:py-8 mx-3 font-semibold md:px-10 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col w-38 justify-center items-center mr-0">
            <Gmath />
            <h1 className="mt-2">Gifted-Math</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-8 py-4 md:py-8 mx-3 font-semibold md:px-10 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col w-38 justify-center items-center mr-0">
            <Gthai />
            <h1 className="mt-2">Gifted-Thai</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-8 py-4 md:py-8 mx-3 font-semibold md:px-10 md:py-6 mb-8 text-xs md:text-lg bg-white shadow-md rounded-xl md:rounded-3xl ">
          <div className="flex flex-col w-38 justify-center items-center mr-0">
            <Geng />
            <h1 className="mt-2">Gifted-English</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs
