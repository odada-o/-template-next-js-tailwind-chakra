import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image
            alt="Your Company"
            src="/images/pattern/common/logo.svg"
            className="mx-auto h-10 w-auto"
            width={40} height={40}
          />
  )
}

export default Logo