import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {removeCredentials} from "../../../features/auth/authSlice"
interface Props {
    userLoggedIn: boolean
}
const ProfileModal: React.FC<Props> = ({ userLoggedIn }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState(false)
    const handleLogOut = () => {
        dispatch(removeCredentials())
        localStorage.removeItem("token")
        //  console.log(user)
         navigate('/')
    }
    return (
        <>
            <ul className='rounded-sm py-2 bg-white'>
                {
                    userLoggedIn
                        ?
                        <button onClick={handleLogOut}>
                            <li className='py-2 px-4'>
                                Log Out
                            </li>
                        </button>
                        :
                        <>
                            <Link to="/auth/login">

                                <li className='py-2 px-4'>
                                    Log In
                                </li>
                            </Link>
                            <Link to="/auth/signup">

                                <li className='py-2 px-4'>
                                    Sign Up
                                </li>
                            </Link>
                        </>
                }

            </ul>
        </>
    )
}

export default ProfileModal