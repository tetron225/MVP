import React from 'react'

var DataCenter = ({ currentDatacenter, handleDatacenterChange, datacenterList }) => {

  return (<div>Datacenter:
    <select value={currentDatacenter} onChange={handleDatacenterChange}>
      <option value='-'>-</option>
      {datacenterList.map((element) => {
        return (
          <option id={element} value={element}>{element}</option>
        )
      })}
      </select>
  </div>)
}

export default DataCenter