import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './cards.jsx';
import 'tachyons';
import { robots } from './robot.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Card id={robots[0].id} name={robots[0].realname} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].realname} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].realname} email={robots[2].email} />
      <Card id={robots[3].id} name={robots[3].realname} email={robots[3].email} />
      <Card id={robots[4].id} name={robots[4].realname} email={robots[4].email} />
      <Card id={robots[5].id} name={robots[5].realname} email={robots[5].email} />
      <Card id={robots[6].id} name={robots[6].realname} email={robots[6].email} />
      <Card id={robots[7].id} name={robots[7].realname} email={robots[7].email} />
      <Card id={robots[8].id} name={robots[8].realname} email={robots[8].email} />
      <Card id={robots[9].id} name={robots[9].realname} email={robots[9].email} />
    </>
  </StrictMode>,
)
