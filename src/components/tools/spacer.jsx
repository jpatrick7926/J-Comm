import React from 'react'

const Spacer = (props) => {

  var style = { minHeight: props.height, width: '100%' }
  return (
    <div style={style}> </div>
  )
}

export default Spacer
