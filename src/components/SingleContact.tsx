import React from 'react'
import { useContactQuery } from '../services/contactApi'

const SingleContact = ({id}:{'id':string}) => {
    const {data} = useContactQuery(id)
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default SingleContact