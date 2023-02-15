import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoHook } from './06-memos/MemoHook';
//import Memorize from './06-memos/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
//import { FocusScreen } from './04-useRef/FocusScreen';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MemoHook />
  //</React.StrictMode>,
)
