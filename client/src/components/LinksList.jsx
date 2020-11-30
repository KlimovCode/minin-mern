import React from 'react'

export const LinksList = ({links})=>{
  if(!links.length) return <p>have not links yet</p>

  return (
    links.map((el,i)=>{
      return (
      <tr>
        <td>{i+1}</td>
      </tr>
      )
    })
  )
}
