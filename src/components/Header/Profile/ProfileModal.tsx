import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProfileModal = () => {
    const [user, setUser] = useState(false)
    return (
        <>
            <ul className='rounded-sm py-2 '>
                <Link to="/login">

                    <li className='py-2 px-4'>
                        Log In
                    </li>
                </Link>
                <Link to="/signup">
                
                    <li className='py-2 px-4'>
                        Sign Up
                    </li>
                </Link>
            </ul>
        </>
    )
}

export default ProfileModal