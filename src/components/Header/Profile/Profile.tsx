import React, { useState } from 'react'
import { ReactComponent as ProfileIcon } from "../../../assets/svgs/profile.svg"
// import { ReactComponent as ProfileIcon } from ""
import { ReactComponent as ProfileInactive } from "../../../assets/svgs/profile-inactive.svg"
import ProfileModal from './ProfileModal'
// 
interface Props {
  userLoggedIn: boolean 
}

const Profile: React.FC<Props> = ({ userLoggedIn }) => {
  const [modalOpen, setModalOpen] = useState(false)


  // const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <div className='relative'>


      <button onClick={() => setModalOpen(!modalOpen)}>
        <span className="text-[32px]">
          {userLoggedIn ? <ProfileIcon /> : <ProfileInactive />}
        </span>
      </button>
      <div className='shadow-sm md:shadow-md  absolute right-0 top-full w-40' style={{ willChange: "transform", transform: `scale(${modalOpen ? 1 : 0})`, transition: "transform 0.4s ease-in", transformOrigin: "top right" }}>

        <ProfileModal userLoggedIn={userLoggedIn}/>
      </div>
    </div>
  )
}

export default Profile