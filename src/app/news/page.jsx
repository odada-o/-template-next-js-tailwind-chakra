"use client"

import FixedHandleSheet from '@/components/bottomSheet/FixedHandleSheet'
import ListTail from '@/components/list/ListTail'
import { mockNews } from '@/data/newsData'
import { Button, Container } from '@chakra-ui/react'
import React from 'react'

const NewsPage = () => {
  return (
    <>
        <ListTail mockNews={mockNews} />
        <FixedHandleSheet>ddddd</FixedHandleSheet>
    </>
  )
}

export default NewsPage