import React from 'react'
import SectionLayout from '../SectionLayout'
import Man from "../../assets/images/man-model.jpg"
import { ReactComponent as RightArrow } from "../../assets/svgs/rightarrow.svg"
// import Woman from "../../assets/images/twowomen.jpg"
import Unisex from "../../assets/images/unisex.jpg"
import Collection from './Collection'



const Collections = () => {
    return (
        <SectionLayout className="bg-[#FCFBF4]">
            <h2 className='text-4xl md:text-5xl font-bold text-center'>Our <span className='text-secondary-600 inline-block'>Collections</span></h2>
            <div className='w-full mx-auto space-y-9 md:space-y-0 max-w-md md:max-w-none  md:grid grid-cols-3 gap-3 py-10'>
                <Collection forWho='Men' linkTo='/collections/men' src={Man} />
                <Collection forWho='Women' linkTo='/collections/women' src={Unisex} />
                <Collection forWho='Unisex' linkTo='/collections/unisex' src={Unisex} />


            </div>
        </SectionLayout>
    )
}

export default Collections