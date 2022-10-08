import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Headers = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-5'>
      <div className='flex flex-row items-center'>
        <SocialIcon url='https://www.linkedin.com/in/promod-tamang-5ab15720a/' bgColor='transparent' fgColor='gray' />
        <SocialIcon url='https://twitter.com/singay96' bgColor='transparent' fgColor='gray' />
        <SocialIcon url='https://github.com/pramodtng' bgColor='transparent' fgColor='gray' />
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className = 'cursor-pointer' network = 'email' bgColor='transparent' fgColor='gray'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
      </div>
    </header>
  )
}

export default Headers