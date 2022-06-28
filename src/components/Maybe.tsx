import React, { ReactText } from 'react'

const Maybe = ({test,children}:{test: boolean,children: React.ReactChild | React.ReactChildren} ) => {
  return (
    <>
       {test && children}
    </>
  )
}

export default Maybe