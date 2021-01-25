import css from './VisualTicket.module.css'
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import s from "./Visual.module.css";

export const Potrait = ({width}) => {
  return (
    <div style={{ ['--width' as string]: width }} className={classNames("bg-ticket-long flex items-center" +
      " justify-center font-display", css.container)}>
        <div className={classNames("border-2 border-white", css.card)}>
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
              <h1 className={css.contentName}>Narongdech</h1>
              <p className={css.contentDescription}>ขอบใจสำหรับทุก ๆ สิ่งที่ณรงค์เดชปฏิบัติมาเพื่อชาติและราชบัลลัง
                เรานั้นได้ผ่านทุกสิ่งทุกอย่างมาด้วยกัน</p>
            </div>
            <div className={css.footer}>
              <div className={css.qrCodeWrapper}>
                <img src="/assets/vectors/qrcode.svg" className={css.qrCode}/>
                <h1 className={css.qrText}>ลงทะเบียนเลย !</h1>
              </div>
              <div className={css.contact}>
              <span className={css.contactText}>@triamudomoph
                <Image
                  src="/assets/vectors/twitter-bw.svg"
                  width={36}
                  height={36}
                />
              </span>
                <span className={css.contactText}>@triamudom.oph
                <Image
                  src="/assets/vectors/instagram-bw.svg"
                  width={36}
                  height={36}
                />
              </span>
                <span className={css.contactText}>Triam Udom Open House
                <Image
                  src="/assets/vectors/youtube-bw.svg"
                  width={36}
                  height={36}
                />
              </span>
                <span className={css.contactText}>Triam Udom Open House
                <Image
                  src="/assets/vectors/facebook-bw.svg"
                  width={36}
                  height={36}
                />
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}