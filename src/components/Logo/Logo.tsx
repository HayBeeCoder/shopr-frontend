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
               <a href="/">

                    <p className="inline-block text-[32px] text-primary-800 tracking-[4px] font-bold font-redhat relative left-0">

                         <span>S</span>
                         <span>H</span>
                         <span className="text-secondary-500">O</span>
                         <span>P</span>
                         <span>R</span>


                    </p>
               </a>
          </>
     )

}

export default Logo;