import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {pers} from './data';
import {useState} from 'react'
import {List} from './components/List'



function App() {
  const [people,setPeople]=useState(pers)

  return (
    <div className='container border text-center'>
      <h4><u>Todays birthdays</u> </h4>
      <List people={people}/>
    </div>
  );
}

export default App;
