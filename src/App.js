import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Status from './components/ServerStatus/ServerStatus'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  
  return (
<Router>
  Web Service Status: 
  <Status/>
  If suspended, Please contact developer for demo. Thank you!

        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>

  );
}

export default App;
