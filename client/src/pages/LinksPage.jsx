import React, {useState, useContext, useCallback, useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {LinksList} from '../components/LinksList'

export const LinksPage = () => {
  const [links, setLinks] = useState([])
  const {loading, request} = useHttp() 
  const {token} = useContext(AuthContext)

  const fetchLinks = useCallback(async() => {
    try {
      const fetched = await request(
        '/api/link', 
        'GET', 
        null, 
        {Authorization: `Bearer ${token}`}
      )
      alert('hi')
      setLinks(fetched)
    } catch(e) {}
  }, [token, request])

  useEffect(()=>{
    fetchLinks()
  }, [fetchLinks])

  if(loading) return <Loader />

  return (
  <div>
    <h1>Links</h1>
    <table>
        <thead>
          <tr>
              <th>number</th>
              <th>Original</th>
              <th>Shorted</th>
              <th>date</th>
              <th>Detail</th>
          </tr>
        </thead>
        <tbody>
    { !loading && <LinksList links={links} /> } 
        </tbody>
      </table>
  </div>
  )
}
