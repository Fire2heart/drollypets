import React from 'react'
import './tagData.css'

function TagData({data}) {
  return (
    <>
        {data.map(item => <div key={item.id} className="data__item">{item.name}</div>)}
    </>
  )
}

export default TagData