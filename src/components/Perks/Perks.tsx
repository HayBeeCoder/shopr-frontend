import React from 'react'
import Perk from './Perk'
import { ReactComponent as AirPlane } from "../../assets/svgs/airplane.svg"
import { ReactComponent as  Package } from "../../assets/svgs/package.svg"
import { ReactComponent as Card } from "../../assets/svgs/card.svg"
import SectionLayout from '../SectionLayout'

const PERKS = [
  {
    heading: "Fast and Secure Global Delivery",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel esse eos animi cupiditate accusantium dolores.",
    icon: <AirPlane/>
  },
  {
    heading: "30 Days return policy",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel esse eos animi cupiditate accusantium dolores.",
    icon: <Package/>
  },
  {
    heading: "100% secure payment",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel esse eos animi cupiditate accusantium dolores.",
    icon: <Card/>
  },

]

const Perks = () => {
  return (
    <SectionLayout>
      <div className='space-y-10 md:space-y-0 text-left md:flex gap-4 items-start md:text-left'>


      {
        PERKS.map((perk,index) => (
          <Perk key={index} heading={perk.heading} description={perk.desc}>{perk.icon}</Perk>
          ))
        }
        </div>
    
    </SectionLayout>
    
  )
}

export default Perks