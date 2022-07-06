import React from 'react';
import './App.css';
import CreateContact from './components/CreateContact';
import DeleteContact from './components/DeleteContact';
import SingleContact from './components/SingleContact';
import UpdateContact from './components/UpdateContact';

import {useContactsQuery} from './services/contactApi'

const App = () =>  {
  const {data, error, isFetching, isLoading, isSuccess} = useContactsQuery()
  return (
    <div className="App">
     {isLoading && <h1>...loading</h1>}
    {isFetching && <h1>...Fetching</h1>}
    {error && <h1>...Error</h1>}
    {isSuccess && (
       data.map(contact => (
         <div key={contact.id}>
        <h1 >{contact.name}</h1>
         <SingleContact id={contact.id} />
       </div>
       ))
     )}
      <CreateContact/>
      <UpdateContact/>
      <DeleteContact/>

    

    </div>
  );
}

export default App;
