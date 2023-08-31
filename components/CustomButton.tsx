'use client';

import { CustomButtonProps } from "@/app/interfaces";

const CustomButton = ({content, btnStyle, handleClick}: CustomButtonProps) => {
  return (
    <button className={`flex flex-row relative justify-center items-center py-4 px-8 outline-none ${btnStyle}`}
      onClick={handleClick}
    >
        {content}
    </button>
  )
}

export default CustomButton