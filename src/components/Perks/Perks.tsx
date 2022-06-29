import React from 'react'
import Perk from './Perk'
import { ReactComponent as AirPlane } from "../../assets/svgs/airplane.svg"
import { ReactComponent as  Package } from "../../assets/svgs/package.svg"
import { ReactComponent as Card } from "../../assets/svgs/card.svg"
import SectionLayout from '../SectionLayout'

const PERKS = [
  {
    heading: "Fast and Secure Global Delivery",
    desc: "Investing in technology to provide fast, acurate and cost-effective service.You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world’s biggest corporations.",
    icon: <AirPlane/>
  },
  {
    heading: "30 Days return policy",
    desc: "You can return unused items within 30 days of delivery. It is important that the items are unused, undamaged, and unwashed. Once we received your return, we will refund the corresponding amount",
    icon: <Package/>
  },
  {
    heading: "100% secure payment",
    desc: " All transactions with Shopr are secure as we use a rigid and robust payment gateway, Stripe. Every customer details are  directed to and processed by stripe and none is sent to our server.",
    icon: <Card/>
  },

]

const Perks = () => {
  return (
    <SectionLayout>
      <div className='space-y-10 md:space-y-0 text-left md:grid grid-cols-3 gap-4 items-start md:text-left'>


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