import React, { useContext, useEffect } from "react";

const Hamburger = ({ onClick }) => {

  return (
    <svg
      className='cursor-pointer'
      onClick={onClick}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 17H19M5 12H19M5 7H19'
        stroke={"#3C1F1C"}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Hamburger;
