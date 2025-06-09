import React from 'react'
import { Link as LinkComponent } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './styles/Link.styles.scss'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
}

const Link: React.FC<ILinkProps> = ({
  children,
  to
}) => {
  return (
    <LinkComponent
      to={to}
      className='link'
    >
      <AiOutlineArrowLeft className='icon' />
      {children}
    </LinkComponent>
  )
}

export default Link
