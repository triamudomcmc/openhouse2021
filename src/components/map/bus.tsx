import React from 'react'

export const BusInfo = () => {
  return (
    <div className="space-y-6 md:w-96 lg:space-y-10">
      <div className="flex flex-row space-x-4">
        <div>
          <p className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-blue-400 rounded-full">
            1
          </p>
        </div>
        <div className="w-64 md:w-full">
          <h1 className="text-lg font-bold text-gray-600 lg:text-xl">รถประจำทาง</h1>
          <p className="text-lg text-gray-500 lg:text-xl">
            ลงป้ายรถประจำทางหน้าโรงเรียน ฝั่งถนนพญาไท สาย 21, 25, 29, 34, 36, 40, 47, 50 93, 113,
            141, 187, 542
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <div>
          <p className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-blue-400 rounded-full">
            2
          </p>
        </div>
        <div className="w-64 md:w-full">
          <h1 className="text-lg font-bold text-gray-600 lg:text-xl">รถประจำทาง</h1>
          <p className="text-lg text-gray-500 lg:text-xl">
            ลงป้ายรถประจำทางหน้าโรงเรียน ฝั่งถนนอังรีดูนังต์ สาย 16, 21
          </p>
        </div>
      </div>
    </div>
  )
}
