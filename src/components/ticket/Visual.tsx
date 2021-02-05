import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import css from './Visual.module.css'

type Props = {
  width: number
  nickname: string
  wishes?: string
  number?: number
}

export const Portrait = ({ width, nickname, wishes, number = 999999 }: Props) => {
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
              <p className={css.ticketNumber}>NO. {number}</p>
            </div>
          </div>
          <div className={css.contentContainer}>
            <h1 className={css.contentTo}>TO</h1>
            <h1 className={css.contentName}>{nickname}</h1>
            <p className={css.contentDescription}>{wishes}</p>
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

export const SimplePortrait = ({ width, nickname, wishes, number = 999999 }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames(
        'bg-ticket-long flex items-center justify-center font-display',
        css.nakedContainer
      )}
    >
      <div className={classNames('border-white', css.card)}>
        <div className={css.subContainer}>
          <div className="flex flex-col items-center">
            <h1 className={css.simpleMTSubHeader}>{nickname}</h1>
            <p className={css.simpleTicketNumber}>NO. {number}</p>
          </div>
          <div className={classNames(css.contentContainer, 'flex flex-col items-center')}>
            <h1 className={css.simpleContentName}>WELCOME TO</h1>
            <h1 className={css.simpleBigContentName}>TRIAM UDOM</h1>
            <h1 className={css.simpleContentName}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.simpleDateTag}>12-13 FEB</span>
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

export const NakedPortrait = ({ width, nickname, wishes, number = 999999 }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames('flex items-center justify-center font-display', css.nakedContainer)}
    >
      <div className={classNames('border-white', css.card)}>
        <div className={css.subContainer}>
          <div className="relative">
            <h1 className={css.mainHeader}>TRIAM UDOM</h1>
            <h1 className={css.subHeader}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.dateTag}>12-13 FEB</span>
            <div className={css.vertivcal}>
              <div className={css.line}></div>
              <p className={css.ticketNumber}>NO. {number}</p>
            </div>
          </div>
          <div className={css.contentContainer}>
            <h1 className={css.contentTo}>TO</h1>
            <h1 className={css.contentName}>{nickname}</h1>
            <p className={css.contentDescription}>{wishes}</p>
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

export const NakedSimplePortrait = ({ width, nickname, wishes, number = 999999 }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames('flex items-center justify-center font-display', css.nakedContainer)}
    >
      <div className={classNames('border-white', css.card)}>
        <div className={css.subContainer}>
          <div className="flex flex-col items-center">
            <h1 className={css.simpleMTSubHeader}>{nickname}</h1>
            <p className={css.simpleTicketNumber}>NO. {number}</p>
          </div>
          <div className={classNames(css.contentContainer, 'flex flex-col items-center')}>
            <h1 className={css.simpleContentName}>WELCOME TO</h1>
            <h1 className={css.simpleBigContentName}>TRIAM UDOM</h1>
            <h1 className={css.simpleContentName}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.simpleDateTag}>12-13 FEB</span>
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

export const Square = ({ width, nickname, wishes, number = 999999 }: Props) => {
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
              <p className={css.squareTicketNumber}>NO. {number}</p>
            </div>
          </div>
          <div className={css.contentContainer}>
            <h1 className={css.squareContentName}>
              <span className="font-semibold">TO</span> {nickname}
            </h1>
            <p className={css.squareContentDescription}>{wishes}</p>
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

export const SimpleSquare = ({ width, nickname, wishes, number = 999999 }: Props) => {
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
          <div className="flex flex-col items-center">
            <h1 className={css.simpleSquareMTSubHeader}>{nickname}</h1>
            <p className={css.simpleTicketNumber}>NO. {number}</p>
          </div>
          <div className={classNames(css.contentContainer, 'flex flex-col items-center')}>
            <h1 className={css.simpleSquareContentName}>WELCOME TO</h1>
            <h1 className={css.simpleSquareBigContentName}>TRIAM UDOM</h1>
            <h1 className={css.simpleSquareContentName}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.simpleDateTag}>12-13 FEB</span>
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

export const NakedSquare = ({ width, nickname, wishes, number = 999999 }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames('flex items-center justify-center font-display', css.squareContainer)}
    >
      <div className={classNames('border-white', css.squareCard)}>
        <div className={css.squareSubContainer}>
          <div className="relative">
            <h1 className={css.mainHeader}>TRIAM UDOM</h1>
            <h1 className={css.subHeader}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.dateTag}>12-13 FEB</span>
            <div className={css.vertivcal}>
              <div className={css.squareLine}></div>
              <p className={css.squareTicketNumber}>NO. {number}</p>
            </div>
          </div>
          <div className={css.contentContainer}>
            <h1 className={css.squareContentName}>
              <span className="font-semibold">TO</span> {nickname}
            </h1>
            <p className={css.squareContentDescription}>{wishes}</p>
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

export const NakedSimpleSquare = ({ width, nickname, wishes, number = 999999 }: Props) => {
  return (
    <div
      style={{ ['--width' as string]: `${width}px` }}
      className={classNames('flex items-center justify-center font-display', css.squareContainer)}
    >
      <div className={classNames('border-white', css.squareCard)}>
        <div className={css.squareSubContainer}>
          <div className="flex flex-col items-center">
            <h1 className={css.simpleSquareMTSubHeader}>{nickname}</h1>
            <p className={css.simpleTicketNumber}>NO. {number}</p>
          </div>
          <div className={classNames(css.contentContainer, 'flex flex-col items-center')}>
            <h1 className={css.simpleSquareContentName}>WELCOME TO</h1>
            <h1 className={css.simpleSquareBigContentName}>TRIAM UDOM</h1>
            <h1 className={css.simpleSquareContentName}>ONLINE OPEN HOUSE 2021</h1>
            <span className={css.simpleDateTag}>12-13 FEB</span>
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
