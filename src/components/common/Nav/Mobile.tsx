import React, { useRef } from 'react'
import Image from 'next/image'
import { useOverlayTriggerState } from '@react-stately/overlays'
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayContainer,
} from '@react-aria/overlays'
import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { useButton } from '@react-aria/button'
import Link from 'next/link'
import { SocialLink } from '../SocialLink'
import classNames from "classnames";

export const Modal = (
  props: Parameters<typeof useOverlay>[0] & Parameters<typeof useDialog>[0]
) => {
  const ref = useRef<HTMLElement | null>(null)
  const { modalProps } = useModal()
  const { overlayProps } = useOverlay(props, ref)
  const { dialogProps } = useDialog(props, ref)

  usePreventScroll()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center bg-white top-24">
      <FocusScope contain restoreFocus autoFocus>
        <nav
          className="flex flex-col items-center justify-between w-full h-full px-16 py-8"
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          <Link href="/">
            <div className="text-lg font-black leading-tight cursor-pointer md:text-2xl font-display">
              <h1 className="text-center text-gray-600">
                TRIAM UDOM ONLINE
                <br />
                OPEN HOUSE 2021
              </h1>
            </div>
          </Link>
          <div className="flex flex-col mt-8 space-y-2 text-lg font-semibold leading-tight text-center text-gray-600 font-display">
            <Link href="/">
              <a>หน้าแรก</a>
            </Link>
            <Link href="/">
              <a>ชมรม</a>
            </Link>
            <Link href="/">
              <a>บทความ</a>
            </Link>
            <Link href="/">
              <a>วิดิโอ</a>
            </Link>
            <Link href="/">
              <a>รายการสด</a>
            </Link>
            <Link href="/">
              <a>การสอบเข้า</a>
            </Link>
            <Link href="/">
              <a>ติดต่อ</a>
            </Link>
            <SocialLink />
          </div>
          <div className="w-24 pt-8 md:w-48">
            <Image src="/assets/tucmc.png" width={1071} height={162} />
          </div>
        </nav>
      </FocusScope>
    </div>
  )
}

export const MobileMenu = ({restClassname = ""}) => {
  const state = useOverlayTriggerState({})
  const ref = useRef<HTMLButtonElement | null>(null)
  const { buttonProps } = useButton(
    {
      onPress: () => (state.isOpen ? state.close() : state.open()),
    },
    ref
  )

  return (
    <>
      <div className={classNames("sticky top-0 justify-center w-full h-24 max-w-full md:flex md:h-28" +
        " bg-gradient-to-r from-blue-200 via-purple-200 to-red-200",restClassname)}>
        <nav className="flex items-center justify-between w-full h-full px-4 py-4">
          <button
            aria-label="Mobile Menu"
            type="button"
            {...buttonProps}
            ref={ref}
          >
            {state.isOpen ? (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
                className="text-white"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
                className="text-white"
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
          <Link href="/">
            <div className="text-base font-black leading-tight cursor-pointer font-display">
              <h1 className="text-justify text-white">
                TRIAM UDOM ONLINE
                <br />
                OPEN HOUSE 2021
              </h1>
            </div>
          </Link>
          <Link href="/register">
            <button
              type="button"
              className="px-4 py-2 text-sm font-bold text-red-200 bg-white border border-transparent rounded-full shadow-md w-max font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200"
            >
              เข้าสู่ระบบ
            </button>
          </Link>
        </nav>
      </div>
      {state.isOpen && (
        <OverlayContainer>
          <Modal isOpen onClose={state.close} />
        </OverlayContainer>
      )}
    </>
  )
}
