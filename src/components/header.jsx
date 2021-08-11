import React from 'react'

function header(props) {
   return (
      <div>
         <p className="mx-4">This is my header {props.count}</p>
      </div>
   )
}

export default header
