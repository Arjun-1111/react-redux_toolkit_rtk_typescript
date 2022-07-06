import React from 'react'

import {useUpdateContactMutation} from '../services/contactApi'


const UpdateContact = () => {

     const [updateContact] = useUpdateContactMutation();
    const [name,setName] = React.useState('')
    const [id,setId] = React.useState('')
    const [email,setEmail] = React.useState('')
     const handleUpdateContact = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        
        const newContact = {
            id,
            name,
            email
        }
        await updateContact(newContact);
        setEmail('');
        setId('');
        setName('')
    }
  return (
     <form onSubmit={(e) => handleUpdateContact(e)}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='id' />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type='submit'>Update Contact</button>
    </form>
  )
}

export default UpdateContact