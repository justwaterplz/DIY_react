import Message from "./components/Message";
import { useState } from 'react';

//채팅창 화면 구현
const Chat = () => {

    //hard coded messages for testing.
    // const messages = [
    //     { text: 'hello world1', sender: 'me' },
    //     { text: 'hello world2', sender: 'me' },
    // ];

    const [msg, setMsg] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    //message handler
    const handleMessages = () => {
        if (newMessage.trim() !== '') {
            // Add the new message to the messages state
            setMsg([...msg, { text: newMessage, sender: 'me' }]);
            // Clear the input field
            setNewMessage('');
        }
    }


    return(
        //flex container
        <div className="flex-col h-screen w-full">
            {/* header */}
            <div className="w-screen h-28">
                {/* pressing this button leads to welcome page or login page */}
                <button className="h-28 border-solid border-teal-200 border-2">
                    <img src="/assets/images/chunsik_button.png" className="h-full"></img>
                </button>
            </div>

            {/* divide screen into 3 parts 
                1. part that has option button(with drop-down button and avatar?)
                2. some space to place codes
                3. chat screen
            */}
            {/* part container */}
            <div className="flex w-full">
                <div className="flex-col bg-red-500 h-screen w-1/5 border-solid border-r-2 border-slate-950 relative">
                    {/* will change this into image-button */}
                    <button className="px-3 py-3 rounded text-white bg-indigo-700">
                        option
                        {/* drop down code goes here */}
                    </button>

                    <img src="/assets/images/taemin_musicismylife.jpg" 
                        className="absolute bottom-0"
                    />
                    

                </div>

                <div className="bg-orange-500 h-screen w-2/5 flex-auto flex-col border-solid border-r-2 border-slate-950">
                    <h1 className="text-center font-bebas_neue text-6xl">
                        CODE
                    </h1>

                    
                </div>

                <div className="bg-yellow-500 h-screen w-2/5 flex-col">
                    <h1 className="text-center font-bebas_neue text-6xl">
                        CHAT
                    </h1>

                    {/* texts printed here*/}
                    <div className="bg-white w-full h-5/6">
                        {msg.map((message, index) => (
                            <Message key={index} text={message.text} sender={message.sender}/>
                        ))}
                    </div>

                    {/* chat input goes here */}
                    <div className="h-1/6">
                        <input type="text" placeholder="type here."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="w-full p-2 border rounded"/>
                        <button 
                        className="bg-blue-500
                        text-white 
                        rounded 
                        text-center
                        w-full
                        h-1/3
                        text-3xl"
                        onClick={handleMessages}>
                            send
                        </button>
                    </div>
                </div>
            </div>
            {/* 1. option and avatar part */}
            
        </div>
    );
}

export default Chat;