import Image from 'next/image'
import React from 'react'
import { User } from '../../../assets/vectors/User'
import classNames from 'classnames'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const ContentCard = ({
  className = '',
  duration = '',
  src,
  children,
  href = '#',
  disabled = false,
  callback = () => {}
}) => {
  const description = React.Children.map(children, child =>
    child.type.displayName === 'Desc' ? child : null
  )
  const author = React.Children.map(children, child =>
    child.type.displayName === 'Author' ? child : null
  )

  if (!disabled) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classNames(
            'flex flex-col justify-between cursor-pointer px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl',
            className.replace('md:w-1/3', '')
          )}
        >
          {duration === '' ? (
            <img
              src={src === '' ? '/assets/nok.png' : src}
              style={{
                height: '18vw',
                minHeight: '145px',
                width: '60vw',
                maxHeight: '188px',
                objectFit: 'cover'
              }}
              className="mx-auto"
              width={240}
              height={188}
            />
          ) : (
            <img
              src={src === '' ? '/assets/nok.png' : src}
              style={{
                height: '18vw',
                minHeight: '145px',
                width: '60vw',
                maxHeight: '188px',
                objectFit: 'cover'
              }}
              className="mx-auto"
              width={240}
              height={188}
            />
          )}
          <h1 style={{ width: '60vw', maxWidth: '320px' }} className="mx-2 font-bold truncate">
            {description}
          </h1>
          <div className="flex flex-row space-x-1 text-gray-300 ">
            <User />
            <p>{author}</p>
          </div>
        </motion.div>
      </Link>
    )
  } else {
    return (
      <div
        onClick={callback}
        className={classNames(
          'flex flex-col bg-gray-200 cursor-pointer justify-between px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md rounded-xl',
          className.replace('md:w-1/3', '')
        )}
      >
        {duration === '' ? (
          <img
            src={src === '' ? '/assets/nok.png' : src}
            style={{
              height: '18vw',
              minHeight: '145px',
              width: '60vw',
              maxHeight: '188px',
              objectFit: 'cover'
            }}
            className="mx-auto"
            width={240}
            height={188}
          />
        ) : (
          <img
            src={src === '' ? '/assets/nok.png' : src}
            style={{
              height: '18vw',
              minHeight: '145px',
              width: '60vw',
              maxHeight: '188px',
              objectFit: 'cover'
            }}
            className="mx-auto"
            width={240}
            height={188}
          />
        )}
        <h1 style={{ width: '60vw', maxWidth: '320px' }} className="mx-2 font-bold truncate">
          {description}
        </h1>
        <div className="flex flex-row space-x-1 text-gray-300 ">
          <User />
          <p>{author}</p>
        </div>
      </div>
    )
  }
}

const Description = ({ children }) => children
Description.displayName = 'Desc'
ContentCard.Desc = Description
const Author = ({ children }) => children
Author.displayName = 'Author'
ContentCard.Author = Author
