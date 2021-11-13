import { useState } from 'react'
import ProgressBar from './components/ProgressBar';
import Wave from './components/Wave';
import './App.css';

function App() {

  const [props, setProps] = useState({width: '0%'})
  return (
    <div className="App">
      <div className="list">
        <div className="item">
          <div className="content">
            <ProgressBar props={props} />
            <Wave />
          </div>
        </div>
      </div>
      <button onClick={() => {setProps({width: '100%'})}}>{props.width}</button>
    </div>

  )
}

export default App;
