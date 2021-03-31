import React from 'react'

var FormName = ({ handleNameChange, name }) => (
  <div>
    Name:
    {console.log('check')}
    <input type='text' onChange={handleNameChange}></input>
  </div>
)



export default FormName;