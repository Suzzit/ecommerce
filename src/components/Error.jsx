import React from 'react'

const Error = (props) => {
  return (
    <div>
        <h4 style={{
          color: "red"
        }}>{props.errMsg}</h4>
    </div>
  )
}

export default Error