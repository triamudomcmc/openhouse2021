import {Layout} from 'components/common/Layout'
import {Potrait, Square} from 'components/ticket/Visual'
import React, {useEffect, useState} from 'react'

const Ticket = () => {

  const [frameWidth,setFrameWidth] = useState(600)

  useEffect(() => {

      const updateWindowDimensions = () => {
        setFrameWidth(prevState => {
          return window.innerWidth/1.5
        })
      }

    window.addEventListener("resize", updateWindowDimensions);
  },[])

  return (
    <Layout>
      <div className="w-full h-full py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-black text-blue-400 mb-4">การ์ดต้อนรับ</h1>
          <div className="flex flex-row space-x-8 mb-10">
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center items-center bg-white rounded-lg shadow-lg w-24 h-24">
                <div className="border-2 border-gray-400 w-16 h-16 rounded-lg"></div>
              </div>
              <h1 className="text-gray-400 font-medium">square</h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center items-center bg-blue-25 rounded-lg shadow-lg w-24 h-24">
                <div className="border-2 border-white w-10 h-16 rounded-lg"></div>
              </div>
              <h1 className="text-gray-400 font-medium">portrait</h1>
            </div>
          </div>
          <Potrait width={frameWidth}/>
        </div>
      </div>
    </Layout>
  )
}

export default Ticket
