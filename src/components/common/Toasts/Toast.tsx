import React from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'

const Toast = ({ show, text, type = 'success' }) => {
  let icon = <></>
  let bg = ''
  if (type == 'success') {
    bg = 'bg-green-500 border-green-700'
    icon = (
      <div className="mr-3 text-green-500 bg-white rounded-full">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-check"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
          />
        </svg>
      </div>
    )
  }
  if (type == 'failed') {
    bg = 'bg-red-500 border-red-700'
    icon = (
      <div className="mr-3 text-red-500 bg-white rounded-full">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-x"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
          />
        </svg>
      </div>
    )
  }
  return show ? (
    <motion.div
      className={classNames(
        'fixed -right-96 top-2 flex items-center border-l-4 py-2 px-3 rounded-l-md shadow-md mb-2 z-50',
        bg
      )}
      animate={{ x: -380 }}
    >
      {icon}
      <div className="max-w-xs text-white ">{text}</div>
    </motion.div>
  ) : (
    <motion.div
      className={classNames(
        'fixed -right-96 top-2 flex items-center border-l-4 py-2 px-3 rounded-l-md shadow-md mb-2 z-50',
        bg
      )}
      animate={{ x: 4 }}
      transition={{ ease: 'easeIn', duration: 1 }}
    >
      {icon}
      <div className="max-w-xs text-white ">{text}</div>
    </motion.div>
  )
}

export default Toast
