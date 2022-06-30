import React from 'react'

interface Props {
    number: number,
    title: string
    children: React.ReactChild
    done: boolean
}

export const CheckoutSectionLayout = ({ number, title,children,done }: Props) => {
    return (
        <div className={`pl-[45px] py-5 -mx-3 md:pl-[50px] bg-[#FCFBF4]  w-full md:py-6 pr-5 md:pr-5 rounded-sm`} >
            <div className='flex gap-2 items-center '>
                <div className={`font-semibold text-sm  leading-none border-[1px] justify-center text-center items-center w-[35px] h-[35px] rounded-full inline-flex border-secondary-500  ${done ? " text-white bg-secondary-500 " : " text-secondary-500"}  -ml-[35px]`}>
                    {number}
                </div>


                <h2 className='font-semibold text-xl'>
                    {title}
                </h2>
            </div>
            {children}

        </div>
    )
}
