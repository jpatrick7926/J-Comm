import React from 'react'

const containerStyle = {
  width: '100%',
  margin: '30px auto'
}

const subheaderStyle = {
  fontSize: '2.375rem',
  color: 'black',
  textAlign: 'center',
  fontFamily: 'Roboto'
}

const SubHeader = (props) => {
  return (
    <div style={containerStyle}>
      <h2 style={subheaderStyle}>
        {props.text}
      </h2>
    </div>
  )
}

export default SubHeader;
