import { useState } from "react";
import "./App.css";
import ChatScreen  from "./components/chatscreen";
import Selection from "./components/Selection";
function App() {
  const [chats,setChats] = useState([])
  return (
    <div className="left-container">
      <section className="bg-white-100 py-4 relative flex-[30%]">
          <div className="text-2xl text-left font-bold pb-2 border-grey-500 border-b-2">
            <h1>E-health</h1>
          </div>

          <div className="relative w-full h-[calc(70%)] p-[24px]">
            <h1>Get Rapid Responses to emergency situations</h1>
          </div>














































          
      </section>

      <section className="right-container">
        <div>
          <img src='C:/Users/summy/Downloads/Ellipsenews.jpeg' />
        </div>
      </section>
        {chats.length == 0 ? <Selection chats={chats} setChats={setChats} /> : <ChatScreen chats={chats} /> }
    </div>
 
  );
}

export default App;
