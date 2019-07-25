import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {

  // const [memberEoEdit, setMemberToEdit] = useState({});
  // const [myUserList, setMyUserList] = useState([]);

  return (
    <div className="App">
      {/* <Form list={myUserList}/> */}
      <Form />
    </div>
  );
}

export default App;
