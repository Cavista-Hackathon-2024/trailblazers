import React from "react";
import { useNavigate } from "react-router-dom";



export default function Home(){
    const navigate = useNavigate();
    return(
        <div>
        <nav>
            
        </nav>
        <div className="bg-blue-50" >
            <div className="py-8 px-8 flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:w-1/2 p-8">
                {/* Left Column */}
                <section>
                <h1 className="text-[4.5rem] font-bold mb-4" style={{ color: 'linear-gradient(to right, #4e54c8, #8f94fb)' }}>VitalAid</h1>
                <p className="text-lg text-blue-700">Get rapid response to emergency situations</p>
                </section>

                <section className="my-7">
                <div>
                    <p className="text-blue-700">Chat with AI to report your emergencies, get guidelines <br/> on how to best handle them and gain access to other emergency services</p>
                </div>
                </section>
                <button onClick={() => navigate("/chat")} className="bg-[#085EDF]  rounded-2xl  text-sm text-white border- border-white-500 shadow-xl">Start Session</button>
            </div>

            <div className="lg:w-1/2 p-8">
                {/* Right Column */}
                <img src="/src/assets/Group.png" alt="Logo" className="w-[70%] h-auto" />
            </div>
            </div>
        </div>
        </div>
    )
}