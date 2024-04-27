"use client"
import React,{useState} from "react";

export default function ChatScreen() {
  const [userInput,setUserInput]= useState('');
  const [chatHistory, setChatHistory]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const handleUserInput= async()=>{
    setIsLoading(true);
    let url = '' //'https://a11e-213-255-128-168.ngrok-free.app/api/chat_response/'//our api endpoint
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
    ])

    setChatHistory((prevChat)=>[
      ...prevChat,
      {role: 'assistant', content: chatCompletion.content}//chatCompletion.choices[0].message.content}
    ]);
    setUserInput('');
    setIsLoading(false);
  }
    return (
  <div className="bg-gray-100 max-h-screen w-full flex flex-col justify-center items-center">
    <div className="w-full max-w-screen-md bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="text-4xl font-bold text-blue-800 mb-2">
          Chatbot Assistant
        </div>
        <p className="text-gray-600 text-lg">
          Welcome to the future of AI-powered assistant. Ask me anything!
        </p>
      </div>
      <div className="mb-4 h-[400px]">
        {chatHistory.map((message, index) => (
          <div key={index} className="flex items-start mb-2 h-max">
            <div className={`w-8 h-8 flex items-center justify-center bg-${message.role === 'user' ? 'blue' : 'green'}-300 text-${message.role === 'user' ? 'blue' : 'green'}-800 rounded-full mr-2`}>
              {message.role === "user" ? 'U' : 'A'}
            </div>
            <div className={`p-2 rounded-md bg-${message.role === 'user' ? 'blue' : 'green'}-100 text-${message.role === 'user' ? 'blue' : 'green'}-800`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <form type='submit' className="flex">
        <input
          type="text"
          placeholder="Ask Me Something"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 rounded-l-lg"
        />
        {isLoading ? (
          <div className="bg-blue-500 text-white p-2 rounded-r-lg animate-pulse">
            Loading
          </div>
        ) : (
          <button
            type='submit'
            onClick={handleUserInput}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Ask
          </button>
        )}
      </form>
    </div>
  </div>
    )
}