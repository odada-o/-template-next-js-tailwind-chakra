import { Image } from '@chakra-ui/next-js'
import { AspectRatio, Heading } from '@chakra-ui/react'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='py-[100px] container'>
        <Heading className='text-[17vw] md:text-[15vw] text-center'>thinK Great</Heading>
        <AspectRatio ratio={2 / 1}>
          <Image src="/images/pattern/main/intro.avif" alt="dd" width={1300} height={1300} />
        </AspectRatio>
      </div>
  )
}

export default Hero2