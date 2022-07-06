import React from 'react'
import { useDeleteContactMutation } from '../services/contactApi'

const DeleteContact = () => {
    const [deleteContact] = useDeleteContactMutation();

    const [id,setId] = React.useState('')
  
     const handleDeleteContact = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        await deleteContact(id)
    
        setId('');
    
    }
  return (
    <form onSubmit={(e) => handleDeleteContact(e)}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='id' />
        <button type='submit'>Delete Contact</button>
    </form>
  )
}

export default DeleteContact