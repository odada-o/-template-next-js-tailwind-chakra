import React, { useState } from 'react';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

function InputError({label, type, isSubmit}) {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = isSubmit && input === ''

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          뉴스레터를 받으려는 {label}을 입력합니다.
        </FormHelperText>
      ) : (
        <FormErrorMessage>{label}이 필요합니다.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default InputError;