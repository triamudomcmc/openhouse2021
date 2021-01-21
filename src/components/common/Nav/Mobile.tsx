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
          className="flex flex-col items-center justify-between w-full px-16 py-4"
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
          <div className="w-24 py-8 md:w-48">
            <Image src="/assets/tucmc.png" width={1071} height={162} />
          </div>
        </nav>
      </FocusScope>
    </div>
  )
}

export const MobileMenu = () => {
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
      <div className="sticky top-0 justify-center w-full h-24 max-w-full md:flex md:h-28 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200">
        <nav className="flex items-center justify-between w-full h-full px-16 py-4">
          <Link href="/">
            <div className="text-lg font-black leading-tight cursor-pointer md:text-2xl font-display">
              <h1 className="text-justify text-white">
                TRIAM UDOM ONLINE
                <br />
                OPEN HOUSE 2021
              </h1>
            </div>
          </Link>
          <button
            aria-label="Mobile Menu"
            type="button"
            {...buttonProps}
            ref={ref}
          >
            {state.isOpen ? 'CLOSE' : 'OPEN'}
          </button>
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
