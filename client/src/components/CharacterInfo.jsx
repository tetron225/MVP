import React from 'react'

var CharacterInfo = ({ name, currentServer, hasInfo }) => (
  <div>
    {hasInfo ? <div> <div className='name'>{name}</div><div className='currentServer'>{currentServer}</div> </div>: null }
  </div>
)

export default CharacterInfo