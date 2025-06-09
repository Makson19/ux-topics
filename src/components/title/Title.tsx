import React from 'react'
import './styles/Title.styles.scss'

interface ITitleProps {
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({
  children
}) => {
  return (
    <h2 className='title'>
      {children}
    </h2>
  )
}

export default Title
