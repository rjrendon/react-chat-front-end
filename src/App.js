// import React from 'react';
// import logo from './logo.svg';

// import Chat from './components/Chat/Chat';
// import Join from './components/Join/Join';

// import { BrowserRouter as Router, Route } from "react-router-dom";

// const App = () => {
//   return (
    
//     <Router>
//       <img src={logo} className="App-logo" alt="logo" />
//       <Route path="/" exact component={Join} />
//       <Route path="/chat" component={Chat} />
//     </Router>
//   );
// }

// export default App;
import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  return (
<Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>

  );
}

export default App;
