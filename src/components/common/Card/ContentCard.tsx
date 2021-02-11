import Image from 'next/image'
import React from 'react'
import { User } from '../../../assets/vectors/User'
import classNames from 'classnames'
import Link from 'next/link'

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
        <div
          className={classNames(
            'flex flex-col justify-between px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md' +
              ' md:w-1/3 rounded-xl',
            className
          )}
        >
          {duration === '' ? (
            <img
              src={src === '' ? '/assets/nok.png' : src}
              style={{ height: '168px', minWidth: '288px', objectFit: 'cover' }}
              className="mx-auto"
              width={288}
              height={188}
            />
          ) : (
            <div className="relative">
              <img
                src={src}
                width={288}
                height={188}
                style={{ height: '188px', minWidth: '288px', objectFit: 'cover' }}
                className="w-full"
              />
              <div className="absolute mx-2 right-3 bottom-3">
                <div className="px-2 py-1 text-sm font-semibold bg-white rounded-lg">
                  {duration}
                </div>
              </div>
            </div>
          )}
          <h1 className="mx-2 font-bold truncate">{description}</h1>
          <div className="flex flex-row space-x-1 text-gray-300 ">
            <User />
            <p>{author}</p>
          </div>
        </div>
      </Link>
    )
  } else {
    return (
      <div
        onClick={callback}
        className={classNames(
          'flex flex-col bg-gray-200 justify-between px-2 pt-3 pb-1 mx-2 space-y-2 shadow-md' +
            ' md:w-1/3 rounded-xl',
          className
        )}
      >
        {duration === '' ? (
          <img
            src={src === '' ? '/assets/nok.png' : src}
            style={{ height: '168px', minWidth: '288px', objectFit: 'cover' }}
            className="mx-auto"
            width={288}
            height={188}
          />
        ) : (
          <div className="relative">
            <img
              src={src}
              width={288}
              height={188}
              style={{ height: '188px', minWidth: '288px', objectFit: 'cover' }}
              className="w-full"
            />
            <div className="absolute mx-2 right-3 bottom-3">
              <div className="px-2 py-1 text-sm font-semibold bg-white rounded-lg">--.--</div>
            </div>
          </div>
        )}
        <h1 className="mx-2 font-bold truncate">{description}</h1>
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
