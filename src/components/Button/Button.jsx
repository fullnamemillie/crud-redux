import React from 'react';

const Button = ({onClick, children}) => {
  return (
    <>
    <button onClick={onClick} className='bg-indigo-600 text-white py-1 px-3 my-5 rounded hover:bg-indigo-700'>{children}</button>
    </>
  )
}

export default Button;