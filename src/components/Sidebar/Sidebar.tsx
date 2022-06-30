import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Close } from '../../assets/svgs/close.svg'
import Nav from '../Nav'
import CloseIcon from "../CloseIcon"

interface Props {
    menuOpen: boolean;
    handleCloseClick: (e: React.FormEvent ) => void
}

const Sidebar:React.FC<Props> = ({menuOpen,handleCloseClick}) => {

    return (
        <>
               <div className='flex flex-col gap-16'>
                    <CloseIcon handleClick={handleCloseClick}/>
                {/* <button className='text-[32px] p-1 ' onClick={handleCloseClick}>
                    <Close />
                </button> */}

                <div className='pt-9'>

                    <Nav />
                </div>
                <div className='flex gap-3 items-center justify-between '>
                    {/* <div className='flex-grow flex-shrink-0 bg-orange-400'> */}

                    <Link to="/auth/login" className='w-full  inline-block flex-grow'>

                    <button className='text-white font-bold p-[12px] bg-secondary-600 w-full rounded-md'>
                        Log In
                    </button>
                    </Link>
                    {/* </div> */}
                    <Link to="/auth/signup" className='inline-block flex-grow w-full '>

                    <button className='text-white font-bold p-[12px] bg-secondary-600 w-full rounded-md'>
                        Sign Up
                    </button>
                    </Link>
                </div>
                </div>
            {/* </section> */}
        </>
    )
}

export default Sidebar
