import React from 'react'

export const MrtInfo = () => {
  return (
    <div className="space-y-6 md:w-96 lg:space-y-10">
      <div className="flex flex-row items-center space-x-4">
        <div>
          <p className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-blue-400 rounded-full">
            1
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-600 lg:text-xl">เดินจากสถานี MRT สามย่าน</h1>
          <p className="text-lg text-gray-500 lg:text-xl">ฝั่งถนนพญาไท ประมาณ 800 เมตร</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <div>
          <p className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-blue-400 rounded-full">
            2
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-600 lg:text-xl">เดินจากสถานี MRT สามย่าน</h1>
          <p className="text-lg text-gray-500 lg:text-xl">ฝั่งถนนอังรีดูนังต์ ประมาณ 1,200 เมตร</p>
        </div>
      </div>
    </div>
  )
}
