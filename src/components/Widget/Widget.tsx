import React from "react";

// import subcomponent named "widgetChild"
import WidgetChild from "./WidgetChild"

// import helperfunctions if there are
import {someHelperFn} from "./Widget.helpers"

// import constants if there are
import {SOME_CONSTANT} from "./Widget.constants"



interface Props {
  dummyProp: string;
}

const Widget: React.FC<Props>  = ({dummyProp}) => {
     /*
     A sub-component used exclusively by Widget.js ( or other components
          in this directory)
     */
     return (
         <>
         </>
     )

}

export default Widget;