import React from 'react'
import IntroSwiper from './introSwiper'
import News from './news'
import { mockNews } from '@/data/newsData'
import Hero from './hero'
import Bento from './bento'
import Hero2 from './hero2'
import Social from './social'
import ListSwiper from '@/components/list/ListSwiper'

const Home = () => {
  return (
    <div className='flex flex-col gap-40'>
      <Hero2 />
      <Social />
      <ListSwiper />
      {/* <Hero /> */}
      <Bento />
      <IntroSwiper />
      <News mockNews={mockNews} title="뉴스" />
    </div>
  )
}

export default Home