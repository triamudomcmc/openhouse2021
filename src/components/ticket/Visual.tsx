import classNames from 'classnames'
import { IUserData } from 'lib/auth'
import Image from 'next/image'
import React from 'react'
import css from './Visual.module.css'

type Props = {
  width: number
  userData: IUserData
}

export const Potrait = ({ width, userData }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames(
        'bg-ticket-long flex items-center justify-center font-display',
        css.container
      )}
    >
      <div className={classNames('border-white', css.card)}>
        <div className={css.subContainer}>
          <div className="relative">
            <h1 className={css.mainHeader}>TRIAM UDOM</h1>
            <h1 className={css.subHeader}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.dateTag}>12-13 FEB</span>
            <div className={css.vertivcal}>
              <div className={css.line}></div>
              <p className={css.ticketNumber}>NO. 999999</p>
            </div>
          </div>
          <div className={css.contentContainer}>
            <h1 className={css.contentTo}>TO</h1>
            <h1 className={css.contentName}>{userData?.nickname}</h1>
            <p className={css.contentDescription}>{userData?.wishes}</p>
          </div>
          <div className={css.footer}>
            <div className={css.qrCodeWrapper}>
              <img src="/assets/vectors/qrcode.svg" className={css.qrCode} />
              <h1 className={css.qrText}>ลงทะเบียนเลย !</h1>
            </div>
            <div className={css.contact}>
              <span className={css.contactText}>
                @triamudomoph
                <Image src="/assets/vectors/twitter-bw.svg" width={36} height={36} />
              </span>
              <span className={css.contactText}>
                @triamudom.oph
                <Image src="/assets/vectors/instagram-bw.svg" width={36} height={36} />
              </span>
              <span className={css.contactText}>
                Triam Udom Open House
                <Image src="/assets/vectors/youtube-bw.svg" width={36} height={36} />
              </span>
              <span className={css.contactText}>
                Triam Udom Open House
                <Image src="/assets/vectors/facebook-bw.svg" width={36} height={36} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Square = ({ width, userData }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames(
        'bg-ticket-sq flex items-center justify-center font-display',
        css.squareContainer
      )}
    >
      <div className={classNames('border-white', css.squareCard)}>
        <div className={css.squareSubContainer}>
          <div className="relative">
            <h1 className={css.mainHeader}>TRIAM UDOM</h1>
            <h1 className={css.subHeader}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.dateTag}>12-13 FEB</span>
            <div className={css.vertivcal}>
              <div className={css.squareLine}></div>
              <p className={css.squareTicketNumber}>NO. 999999</p>
            </div>
          </div>
          <div className={css.contentContainer}>
            <h1 className={css.squareContentName}>
              <span className="font-semibold">TO</span> {userData?.nickname}
            </h1>
            <p className={css.squareContentDescription}>{userData?.wishes}</p>
          </div>
          <div className={css.footer}>
            <div className={css.qrCodeWrapper}>
              <img src="/assets/vectors/qrcode.svg" className={css.qrCode} />
              <h1 className={css.qrText}>ลงทะเบียนเลย !</h1>
            </div>
            <div className={css.contact}>
              <span className={css.contactText}>
                @triamudomoph
                <Image src="/assets/vectors/twitter-bw.svg" width={36} height={36} />
              </span>
              <span className={css.contactText}>
                @triamudom.oph
                <Image src="/assets/vectors/instagram-bw.svg" width={36} height={36} />
              </span>
              <span className={css.contactText}>
                Triam Udom Open House
                <Image src="/assets/vectors/youtube-bw.svg" width={36} height={36} />
              </span>
              <span className={css.contactText}>
                Triam Udom Open House
                <Image src="/assets/vectors/facebook-bw.svg" width={36} height={36} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
