import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { LinkCard } from '../components/LinkCard'

export const DetailPage = () => {
  const { token } = useContext(AuthContext)
  const { request, loading, error } = useHttp()
  const [link, setLink] = useState(null)
  let { id } = useParams()

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${id}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLink(fetched)
    } catch (error) {

    }
  }, [token, id, request])

  useEffect(() => {
    getLink()
  }, [getLink])


  if (loading) return <Loader />

  return (
    <div className="container">
      <h1>DetailPage</h1>
      {!loading && link && <LinkCard link={link} />}
    </div>
  )
}
