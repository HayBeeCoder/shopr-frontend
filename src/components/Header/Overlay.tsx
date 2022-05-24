import React from 'react'

interface Props {
  menuOpen: boolean;
  handleClick: (e: React.FormEvent) => void

}

const Overlay:React.FC<Props> = ({menuOpen,handleClick}) => {
  return (<>
  {menuOpen  && <div className="md:hidden w-screen left-0 top-0 h-screen z-[990] bg-black/50 fixed" onClick={handleClick}></div>}
  </>
  )
}

export default Overlay