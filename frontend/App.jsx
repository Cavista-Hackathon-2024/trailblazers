import { useState } from "react";
import "./App.css";
// import ChatScreen  from "./components/chatscreen";
import ChatScreen  from "./components/ChatSreenII";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Home from "./components/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' element={<ChatScreen />}/>
      </Routes>
    </Router>
 
  );
}

export default App;
