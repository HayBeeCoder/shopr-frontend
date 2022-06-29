import React from 'react'
import SectionLayout from '../SectionLayout'
import Man from "../../assets/images/man-model.jpg"
import { ReactComponent as RightArrow } from "../../assets/svgs/rightarrow.svg"
// import Woman from "../../assets/images/twowomen.jpg"
import Woman from "../../assets/images/woman-collection.jpg"
import Collection from './Collection'



const Collections = () => {
    return (
        <div id='collections'>

        <SectionLayout className="bg-[#FCFBF4]">
            <h2 className='text-4xl md:text-5xl font-bold text-center'>Our <span className='text-secondary-600 inline-block'>Collections</span></h2>
            <div className='w-full mx-auto space-y-9 md:space-y-0 max-w-md md:max-w-4xl  md:grid grid-cols-2 gap-3 py-10 '>
                <Collection forWho='Men' linkTo='/collections/men' src={Man} />
                <Collection forWho='Women' linkTo='/collections/women' src={Woman} />
                {/* <Collection forWho='Woman' linkTo='/collections/unisex' src={Woman} /> */}


            </div>
        </SectionLayout>
        </div>
    )
}

export default Collections