import React from 'react'
import Image from 'next/image'
import Timetable from "./Timetable";

export const Liveshow = () => (
  <div>
    <div className="flex flex-col items-center justify-center w-full h-full mt-10 md:mt-56 font-display">
      <h1 className="text-2xl font-bold text-center text-blue-400 md:text-6xl lg:text-8xl">
        ตารางรายการสด
        <span className="px-2 ml-1 text-xl text-white rounded md:ml-2 md:px-3 md:text-5xl lg:text-7xl md:rounded-lg bg-gradient-to-br from-red-300 to-red-100">
          LIVE
        </span>
      </h1>
      <div className="w-8/12 mx-auto max-w-2xl flex justify-center items-center">
        <Image
          src="/assets/vectors/UndrawPositiveAttitude.svg"
          width={854}
          height={441}
        />
      </div>
      <Timetable className="w-full xxs:w-11/12 max-w-2xl px-2 xxs:px-3 xs:px-10 mt-6 font-display" date="12" data={[{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"},{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"},{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"},{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}]}/>
      <Timetable className="w-full xxs:w-11/12 max-w-2xl px-2 xxs:px-3 xs:px-10 mt-6 font-display" date="13" data={[{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"},{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"},{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"},{starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}, {starttime: 1000, endtime: 1000, title:"การแสดงเชียร์เพลงพระราชนิพนธ์", club:"ชมรมเชียร์"}]}/>
    </div>
  </div>
)
