import './App.css';
import './Components/styles.css'
import FetchAPI from './Components/FetchAPI';
import { useState } from 'react';

function App() {
  const [opt, setOpt] = useState('all');

  return (
    <div className="App">
      <h1 className='UserDetails'>User Details</h1>
      <p className='UserDetails'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      <div className='Options'>
        <input type="radio" id="html" name="fav_language" value="All" onClick={() => {setOpt('all')}} />
        <label for="All" >All</label>
        <input type="radio" id="css" name="fav_language" value="Male" onClick={() => {setOpt('male')}} />
        <label for="Male" >Male</label>
        <input type="radio" id="css" name="fav_language" value="Female" onClick={() => {setOpt('female')}}/>
        <label for="Female" >Female</label>
      </div>
      <FetchAPI opt={opt}/>
    </div>
  );
}

export default App;
