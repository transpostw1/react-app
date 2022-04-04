import React from 'react'

const ConatainerType = () => {
  return (
    <div>
        <h3>Type</h3>
        <select className='w-full'>{
            ["20'Standard","40'Standard","40'High Cube","20'Refrigerated","40'Refrigerated","45'Refrigerated"].map((item)=>{
                return ( <option key={item} value={item}>{item}</option>)
            } )}
        </select>
    </div>
  )
}

export default ConatainerType