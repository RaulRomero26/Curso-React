import { useDispatch, useSelector } from 'react-redux' 

import reactLogo from './assets/react.svg'
import './App.css'

import { increment } from './store/slices/counter'

function App() {
  
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          count is {counter}
        </button>
        
      </div>
     
    </div>
  )
}

export default App
