"use client"
import React,{useState} from "react";

export default function ChatScreen() {
  const [userInput,setUserInput]= useState('');
  const [chatHistory, setChatHistory]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const handleUserInput= async()=>{
    setIsLoading(true);
    let url = 'https://a11e-213-255-128-168.ngrok-free.app/api/chat_response/'//our api endpoint
    const data = await fetch(
        url, {
            'method':'POST',
            'headers':{
                'Content-Type':'application/json'
            },
            'body': JSON.stringify({message:chatHistory})
        }
    )

    let chatCompletion = await data.json()
    console.log(chatCompletion)
    setChatHistory((prevChat)=>[
      ...prevChat,
      {role: 'user', content: userInput},
    // ]);
    // const chatCompletion= await openai.chat.completions.create({
    //   messages: [...chatHistory, {role: 'assistant', content: userInput}],
    //   model:'gpt-3.5-turbo'
    // });
    ])

    setChatHistory((prevChat)=>[
      ...prevChat,
      {role: 'assistant', content: chatCompletion.content}//chatCompletion.choices[0].message.content}
    ]);
    setUserInput('');
    setIsLoading(false);
  }
    return (
     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-md mg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
              <div className="text-4xl font-bold text-blue-800 mb-2">
                  Chatbot Assistant
              </div>
              <p className="text-gray-600 text-lg">
                  Welcome to the future of AI powered assistant. Ask me anything!!!
              </p>
          </div>
          <div className="mb-4" style={{height: "400px", overflow: 'auto'}}>
            {chatHistory.map((message,index)=>(
              <div
                key ={index}
                className={`${message.role === 'user' ? 'text-left' : 'text-right'} mb-2`}
            
                >
                  <div className={`message_role ${message.role === 'user' ? 'bg-blue-300 text-blue-800' : 'bg-green-300 text-green-800'}`}>
                    {message.role === "user" ? 'H':'A'}
                  </div>

                  <div className={`message ${message.role==='user' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'  } p-2 rounded-md`}>
                    {message.content}
                  </div>
              </div>
            ))}
          </div>
          <form type="submit" className="flex">
              <input type="text"
              placeholder="Ask Me Something"
              value={userInput}
              onChange={(e)=> setUserInput(e.target.value)}
              className="flex-1 p-2 rounded-1-lg"
              />
              {isLoading ? (
                <div className="bg-blue-500 text-white p-2 rounded-r-lg animate-pulse">
                  Loading
                </div>):(
                  <button
                  onClick={handleUserInput}
                  type='submit'
                  className= "bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                  >
                    Ask
                  </button>
              )}
          </form>
        </div>
      </div>

    )
}