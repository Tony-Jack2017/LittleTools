import { useState } from 'react'
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {

  const [props, setProps] = useState({width: '0%'})
  return (
    <div className="App">
      <div className="list">
        <div className="item">
          <div className="content">
            <ProgressBar props={props} />
          </div>
        </div>
      </div>
      <button onClick={() => {setProps({width: '100%'})}}>{props.width}</button>
    </div>

  )
}

export default App;
