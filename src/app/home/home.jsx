import React from 'react'
import IntroSwiper from './introSwiper'
import News from './news'
import { mockNews } from '@/data/newsData'
import Hero from './hero'
import Bento from './bento'
import Hero2 from './hero2'
import Social from './social'

const Home = () => {
  return (
    <>
      <Hero2 />
      <Social />
      {/* <Hero /> */}
      <Bento />
      <IntroSwiper />
      <News mockNews={mockNews} title="뉴스" />
    </>
  )
}

export default Home