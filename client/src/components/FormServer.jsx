import React from 'react'

var FormServer = ({ datacenterServer, currentServer, handleServerChange, DCIndex, isDisabled }) => (
  <div> Server:
    <select value={currentServer} onChange={handleServerChange} disabled={isDisabled ? true : false}>
      {console.log(DCIndex)}
      {console.log(datacenterServer[DCIndex])}
      <option value= '--'>--</option>
      {isDisabled ? null : datacenterServer[DCIndex].map((element) => {
        return(
        <option id={element} value={element}>{element}</option>
        )
      })}
    </select>
  </div>
)



export default FormServer