import React from 'react'
import './styles/Button.styles.scss'

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  sx?: React.CSSProperties;
  type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  sx,
  type='button',
}) => {
  return (
    <button
      type={type}
      className='btn'
      style={sx}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
