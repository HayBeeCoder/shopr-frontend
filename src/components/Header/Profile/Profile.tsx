import React,{useState} from 'react'
import { ReactComponent as ProfileIcon } from "../../../assets/svgs/profile.svg"
// import { ReactComponent as ProfileIcon } from ""
import { ReactComponent as ProfileInactive } from "../../../assets/svgs/profile-inactive.svg"
// 


const Profile = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <button >
    <span className="text-[32px]">
         {userLoggedIn ? <ProfileIcon /> : <ProfileInactive/>}
    </span>
</button>
  )
}

export default Profile