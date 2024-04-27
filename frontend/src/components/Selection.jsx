import React from 'react'
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const Selection = () => {
    const options = [
        {title: 'General Police report',value: 'Police Report'},
        {title: 'First Aid Guide',value: 'Police Report'},
        {title: 'Emergency Driver',value: 'Police Report'},
        {title: 'Best Hospital Recomendation',value: 'Police Report'},
]
    const startChat = (value) => {
        let newChat = [...chats,{
            message: value,
        }]
        setChats(newChat)
    }

const navigate = useNavigate();

  return (
        <section className="">
            <p className="text-sm text-center opacity-70">How can we help you today?</p>

            <div className="flex justify-evenly py-12 px-56 items-center" >
                {options.map(({title,value,index}) => (
                        <button onClick={() => navigate("/chat")} key={index} className="bg-[#085EDF] w-[106px] h-[72px] rounded-2xl text-sm text-white border-4 border-white-500 shadow-xl">{title}</button>
                ))}
            </div>

            {/* <div className="flex items-center justify-center pt-32">
                <input placeholder="Enter Your Request" className="bg-[#D6D3D3] rounded-xl pl-3 py-2 w-4/6  border-none " />
                <PaperPlaneIcon className="stroke-white bg-[#085EDF] ml-2 size-9 p-2 rounded-full"/>
            </div> */}
      </section> 
  )
}

export default Selection