import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [value, setValue] = useState('')

  const handleCreate = async (event) => {
    try {
      const data = await request('/api/link/generate', 'POST', { from: value }, {
        Authorization: `Bearer ${auth.token}`
      })
      history.push(`/detail/${data.link._id}`)
    } catch (error) {

    }
  }

  return (
    <div>
      <h1>CreatePage</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> <br />
      <button onClick={handleCreate}>Create short link</button>
    </div>
  )
}
