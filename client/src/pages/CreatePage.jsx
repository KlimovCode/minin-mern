import React, { useState } from 'react'

export const CreatePage = () => {
  const [value, setValue] = useState('')


  return (
    <div>
      <h1>CreatePage</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> <br />
      <button>Create short link</button>
    </div>
  )
}
