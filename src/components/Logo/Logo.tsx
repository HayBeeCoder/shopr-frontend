import React from "react";

// import subcomponent named "widgetChild"
import WidgetChild from "./WidgetChild"

// import helperfunctions if there are
// import {someHelperFn} from "./Logo.helpers"

// import constants if there are
// import {SOME_CONSTANT} from "./Logo.constants"



interface Props {
     //   dummyProp: string;
     // position: "top"|"bottom"
}

const Logo: React.FC<Props> = ({  }) => {
     /*
     A sub-component used exclusively by Logo.js ( or other components
          in this directory)
     */
     return (
          <>
                    <p className="leading-[0px] inline-block text-[24px] text-primary-800 tracking-[4px] font-bold font-redhat  ">
               <a href="/" className="leading-[0px]">


                         <span className="leading-[0px] inline-block">S</span>
                         <span className="leading-[0px] inline-block">H</span>
                         <span className="leading-[0px] inline-block text-secondary-500">O</span>
                         <span className="leading-[0px] inline-block">P</span>
                         <span className="leading-[0px] inline-block">R</span>


               </a>
                    </p>
          </>
     )

}

export default Logo;