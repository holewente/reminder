import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {pers} from './data';



function App() {
  const [people,setPeople]=useState(pers)
  return (
    <div className='App'>
      <h4>Todays birthdays</h4>
      <List people={people}/>
    </div>
  );
}

export default App;
