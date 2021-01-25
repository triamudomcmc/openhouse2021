import React from 'react'
import Image from 'next/image'

import s from './Visual.module.css'

const Visual = () => (
  <div className={s.root}>
    <div className={s.container}>
      <div className={s.card}>
        <div className="flex flex-col">
          <div className={s.titleWrapper}>
            <h1 className={s.title}>TRIAM UDOM</h1>
            <h1 className={s.subtitle}>ONLINE OPEN HOUSE 2021</h1>
            <h1 className={s.date}>12-13 FEB</h1>
          </div>
          <p className={s.ticketNumber}>NO. 999999</p>
          <p className={s.to}>TO</p>
          <p className={s.name}>Tawan</p>
          <p className={s.text}>อย่าให้กูเจอ กูจะเล่นแม่งให้หนัก</p>
        </div>
        <div className="flex flex-row justify-between w-full text-3xl font-medium text-white">
          <div className="flex flex-col justify-between">
            <Image src="/assets/vectors/qrcode.svg" width={128} height={128} />
            <h1 className="mt-4 text-xl">ลงทะเบียนเลย !</h1>
          </div>
          <div className="flex flex-col justify-end space-y-2">
            <div className="flex flex-row items-center justify-end">
              <p className="mr-4">@triamudomoph</p>
              <Image
                src="/assets/vectors/twitter-bw.svg"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <p className="mr-4">@triamudom.oph</p>
              <Image
                src="/assets/vectors/instagram-bw.svg"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <p className="mr-4">Triam Udom Open House</p>
              <Image
                src="/assets/vectors/youtube-bw.svg"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <p className="mr-4">Triam Udom Open House</p>
              <Image
                src="/assets/vectors/facebook-bw.svg"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Visual
