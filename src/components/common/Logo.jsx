import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

const Logo = ({ size }) => {
  return (
    <Image
            alt="Your Company"
            src="/images/pattern/common/logo.svg"
            // className="mx-auto h-[32px] w-auto"
            className={classNames()}

            // className={classNames('h-8 w-auto', size && `h-${size} w-${size}`)}
            width={size} height={size}
          />
  )
}

export default Logo