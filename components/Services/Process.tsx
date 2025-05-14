import React from 'react'

interface Props {
    num: string
    title: string,
    description: string
}
const Process = ({ title, description, num }: Props) => {
    return (
        <div className='flex flex-col gap-12 h-[320px] border border-gray-200 items-start px-5 py-7 '>
            <p className='text-[14px] text-[#606060]'>{num}</p>
            <div className='flex flex-col gap-7  max-w-[368px] w-full'>
                <h3 className='text-start'>{title}</h3>
                <p className='text-[16px] text-[#606060]'>{description}</p>
            </div>
        </div>
    )
}

export default Process
