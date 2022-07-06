import React from 'react'
import {useCreateContactMutation} from '../services/contactApi'

const CreateContact = () => {
    const [createContact] = useCreateContactMutation();
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')

    const handleCreateContact = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const newContact = {
            id: Date.now().toString(),
            name,
            email
        }
        await createContact(newContact);
        setEmail('');
        setName('')
    }

  return (
    <form onSubmit={(e) => handleCreateContact(e)}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type='submit'>Add Contact</button>
    </form>

  )
}

export default CreateContact