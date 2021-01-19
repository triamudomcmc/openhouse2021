import React from 'react'
import cn from "classnames";
import s from "../../assets/styles/Header.module.css";
import {Home} from "../common/Header/Home";
import Link from "next/link";
import useSWR from "swr";
import Group8 from "../../assets/vectors/Group8";
import {Camera, CardV, Carv, Phone, Puzzle} from "../../assets/vectors/Icons";
import Videos from "./Videos";
import Blogs from "./Blogs";
import Programs from "./Programs";

export const Index = ({stream}) => {

  const response = useSWR('/api/stage', {
    initialData: stream,
    refreshInterval: 5000,
  })

  const updatedStream = response.data || ''

  return (
    <div className="">
      <div className={cn(s.root, s.indexGradient)}>
        <div className="flex flex-col items-center justify-center w-full h-full pb-20 md:pb-32 font-display">
          <div className="mt-8 pb-4 md:pb-14 text-3xl font-black text-center text-white md:mt-16 md:text-6xl">
            <div className="max-w-xs md:max-w-screen-md">
              <Home />
            </div>
            <h1 className="mt-6 md:mt-16 text-shadow">TRIAM UDOM ONLINE</h1>
            <h1 className="text-shadow">OPEN HOUSE 2021</h1>
            <div>
              <h2 className="text-xl md:text-4xl m-4 md:m-12 font-bold">12-13 FEBRUARY</h2>
            </div>
            <Link href="yeee">
              <button
                type="button"
                className="text-purple-200 inline-flex items-center px-10 py-2 text-base font-bold text-white border border-transparent rounded-full bg-white md:py-4 w-max md:text-3xl font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
              >
                เข้าสู่ระบบ
              </button>
            </Link>
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="headerCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 1 0 L 0 0 L 0 0.917969 C 0.0742188 0.984375 0.269531 1.023438 0.503906 0.984375 C 0.871094 0.917969 0.910156 0.9375 0.992188 0.980469 C 0.996094 0.980469 0.996094 0.984375 1 0.984375 Z M 1 0 "/>
          </clipPath>
        </defs>
        <defs>
          <clipPath id="headerCurveMobile" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.601562 0.972656 C 0.683594 0.9375 0.902344 0.96875 1 0.984375 L 1 -0.015625 L 0 -0.015625 L 0 0.941406 C 0.0898438 1.015625 0.496094 1.011719 0.601562 0.972656 Z M 0.601562 0.972656 "/>
          </clipPath>
        </defs>
      </svg>
      <div className="relative flex flex-col justify-center items-center -top-16 md:-top-36 font-display">
        <div className="bg-white w-4/5 md:w-7/12 shadow-lg rounded-3xl px-5 md:px-10 py-5 smd:py-8 mb-3">
          <div className="mb-4 md:mb-8 ml-2 font-medium">
            <div className="flex items-center text-xs md:text-2xl">
              <span className="bg-red-400 font-semibold text-white text-xs md:text-2xl px-2">LIVE</span><span className="ml-2 md:ml-4">ไอ้ตะวัน ประธาน กช. โดนรุมกระทืบ</span>
            </div>
            <div className="text-xs min-w-min md:text-2xl text-gray-300">
              public event | ประธานชมรม | 10.30-16.80 น.
            </div>
          </div>
          <div className="frame-height-mobile md:frame-height-desktop">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              src={`${updatedStream.stream}?autoplay=1&mute=1`}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mb-3 bg-white w-4/5 md:w-7/12 shadow-lg rounded-3xl px-4 md:px-12 py-4 md:py-16">
          <div className="flex flex-col items-center justify-center mx-auto">
            <h1 className="font-semibold md:font-bold text-3xl md:text-7xl text-blue-75">สอบเข้า</h1>
            <h1 className="font-bold text-xs md:text-3xl text-gray-400">6 March 2021</h1>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <h1 className="font-bold text-4xl md:text-8xl text-blue-75">43</h1>
            <p className="font-medium text-xs md:text-xl text-gray-400">DAYS LEFT</p>
          </div>
          <div className="flex flex-col items-center justify-center h-20 md:h-full mx-auto">
            <Group8 className="w-24 md:w-full"/>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-4/5 md:w-7/12">
          <div className="flex flex-col justify-center items-center text-gray-400 md:font-semibold mt-2 md:mt-4 mx-1 md:mx-2 text-xs md:text-lg w-16 h-16 md:w-44 md:h-44 bg-white shadow-lg rounded-xl md:rounded-3xl">
            <Camera className="h-9 md:h-24"/>
            วีดีโอ
          </div>
          <div className="flex flex-col justify-center items-center text-gray-400 md:font-semibold mt-2 md:mt-4 mx-1 md:mx-2 text-xs md:text-lg w-16 h-16 md:w-44 md:h-44 bg-white shadow-lg rounded-xl md:rounded-3xl">
            <Puzzle className="h-9 md:h-24"/>
            ชมรม
          </div>
          <div className="flex flex-col justify-center items-center text-gray-400 md:font-semibold mt-2 md:mt-4 mx-1 md:mx-2 text-xs md:text-lg w-16 h-16 md:w-44 md:h-44 bg-white shadow-lg rounded-xl md:rounded-3xl">
            <Carv className="h-7 my-1 md:h-24"/>
            การเดินทาง
          </div>
          <div className="hidden md:flex flex-col justify-center items-center text-gray-400 md:font-semibold mt-2 md:mt-4 mx-1 md:mx-2 text-xs md:text-lg w-16 h-16 md:w-44 md:h-44 bg-white shadow-lg rounded-xl md:rounded-3xl">
            <CardV className="h-9 md:h-24"/>
            การ์ดต้อนรับ
          </div>
          <div className="flex flex-col justify-center items-center text-gray-400 md:font-semibold mt-2 md:mt-4 mx-1 md:mx-2 text-xs md:text-lg w-16 h-16 md:w-44 md:h-44 bg-white shadow-lg rounded-xl md:rounded-3xl">
            <Phone className="h-7 my-1 md:h-24"/>
            ติดต่อ
          </div>
        </div>
        <Programs/>
        <Videos/>
        <Blogs/>
      </div>
    </div>
  )
}
