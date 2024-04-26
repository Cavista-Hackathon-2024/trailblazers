import { useState } from "react";
import "./App.css";
import ChatScreen  from "./components/chatscreen";
import Selection from "./components/Selection";
function App() {
  const [chats,setChats] = useState([])
  return (
    <main className="bg-white-100 py-4 ">
      <section>
        <div className="text-2xl text-center font-bold pb-2 border-grey-500 border-b-2">
          E-Health
        </div>
      </section>
      {chats.length == 0 ? <Selection chats={chats} setChats={setChats} /> : <ChatScreen chats={chats} /> }

    </main>
  );
}

export default App;
