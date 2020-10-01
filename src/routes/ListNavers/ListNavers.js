import React, { useState, useEffect } from 'react'
import { listarNavers } from 'services/auth'

const ListAllNavers = () => {
  const [navers, setNavers] = useState([])

  const loadNavers = async () => {
    try {
      setNavers(await listarNavers())
    } catch (e) {
      console.log('deu ruim ')
    }
  }
  useEffect(() => {
    loadNavers()
  }, [])

  console.log(navers)
  return (
    <div>
      {navers.map(navers => {
        return (
          <div>
            <div>
              {' '}
              <img src={navers.url} />
            </div>
            <div> {navers.name} </div>
            <div> {navers.admission_date} </div>
            <div> {navers.birthdate} </div>
            <div> {navers.job_role} </div>
            <div> {navers.project} </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListAllNavers
