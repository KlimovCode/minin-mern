import React from 'react'

export const LinkCard = ({ link }) => {
  console.log(link);

  return (
    <div>
      <h2>LinkCard</h2>
      <p>Your link {link.from}</p>
      <p>Generated {link.to}</p>
      <p>Clicks {link.clicks}</p>
      <p>Date {new Date(link.date).toLocaleDateString()}</p>
    </div>
  )
}