import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CardList from './cardList.jsx';
import 'tachyons';
import { robots } from './robot.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList roboto={robots}/>
  </StrictMode>,
)
