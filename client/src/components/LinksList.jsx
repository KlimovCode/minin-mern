import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinksList = ({ links }) => {
  return (
    links.map((el, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{el.from}</td>
          <td>{el.to}</td>
          <td>{el.clicks}</td>
          <td>
            <NavLink to={'/detail/' + el._id}>
              {el._id}
            </NavLink>
          </td>
        </tr>
      )
    })
  )
}
