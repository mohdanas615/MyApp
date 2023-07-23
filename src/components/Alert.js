import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-success alert-dismissible fade show mx-0`} role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
  
</div>
  )
}

export default Alert;
