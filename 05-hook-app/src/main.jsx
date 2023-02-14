import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FormWithCustomHook />
  //</React.StrictMode>,
)
