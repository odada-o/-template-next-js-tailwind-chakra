import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Button = ({children, type, className, icon: Icon, href}) => {

  // type별로 다른 스타일을 적용할 수 있도록 조건부 렌더링
  const buttonStyle = classNames(
    'flex justify-center items-center gap-3 rounded-md py-1.5 text-sm/6 font-semibold box-border', 
    {
      'bg-indigo-600 text-white': type === 'solid',
      'border border-gray-400 border-solid': type === 'outline',
      '': type === 'ghost',
      'px-3' : !className?.includes('px-0'),
    },
    className
  )

  // as prop이 있으면 a 태그로, 없으면 button 태그로 렌더링
  // 조건1 : href 있는지 확인
  if (href) {
    return (
      <Link href={href} className={buttonStyle}>
        {Icon && <Icon size={25} />}
        {children}
      </Link>
    )
  }


  return (
    <button className={buttonStyle}>
      {Icon && <Icon size={25} />}
      {children}
    </button>
  )
}

export default Button