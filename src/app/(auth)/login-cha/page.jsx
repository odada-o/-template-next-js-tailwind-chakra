"use client"

import React, { useState } from 'react'
import { AbsoluteCenter, Box, Button, Card, CardBody, Checkbox, Divider, Flex, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Logo from '@/components/common/Logo'
import InputError from '@/components/form/InputError'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const LoginChaPage = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
  }
  
  return (
    <VStack>
      <VStack>
        <Logo size={8} />
        <Text textStyle="xl">Sign in to your account</Text>
      </VStack>
      <Card className='w-[480px]'>
        <CardBody>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <InputError label="이메일" type="email" isSubmit={isSubmit} />
            <InputError label="비밀번호" type="password" isSubmit={isSubmit} />

            <Flex>
              <Checkbox>Remember me</Checkbox>
              <Spacer />
              <Button colorScheme='teal' variant='link'>
                비밀번호를 잊으셨나요?
              </Button>
            </Flex>

            <Button type='submit' className="w-full">로그인</Button>
          </form>
          <Stack direction='row' spacing={4}>
            <Button leftIcon={<FcGoogle />} variant='ouline'>
              Email
            </Button>
            <Button leftIcon={<FaGithub />} colorScheme='white' variant='outline'>
              Call us
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  )
}

export default LoginChaPage