import Message from './components/Message';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//채팅창 화면 구현
const Chat = () => {

    const [msg, setMsg] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    //옵션 버튼
    const [showOptions, setOptions] = useState(false);

    const toggleOptions = () => {
        setOptions(!showOptions);
    }

    const handleOptionClicks = (options) => {
        alert(`thank you: ${options}`);
    }
    
    //message handler
    const handleMessages = () => {
        if (newMessage.trim() !== '') {
            // Add the new message to the messages state
            setMsg([...msg, { text: newMessage, sender: 'me' }]);
            // Clear the input field
            setNewMessage('');
        }
    }

    //use enter key in keyboard to finish entering text.
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            //handling message in previous way
            handleMessages();
        }
    }

    


    return(
        //flex container
        <div className="flex-col min-h-screen w-full overflow-hidden">
            {/* header */}
            <div className="w-full h-28">
                {/* pressing this button leads to welcome page or login page */}
                <Link to="/login" className="h-28 border-solid border-teal-200 border-2 flex items-center">
                    <img src="/assets/images/chunsik_button.png" className="h-full"></img>
                </Link>
            </div>

            {/* divide screen into 3 parts 
                1. part that has option button(with drop-down button and avatar?)
                2. some space to place codes
                3. chat screen
            */}
            {/* part container */}
            <div className="flex w-full h-dvh">
                <div className="flex-col bg-red-500 w-1/5 border-solid border-r-2 border-slate-950 relative">
                    {/* will change this into image-button */}
                    <button className="px-3 py-3 rounded text-white bg-indigo-700"
                    onClick={toggleOptions}>
                        option
                        {/* drop down code goes here */}
                    </button>

                    {/* drop-down menus */}
                    {showOptions && (
                        <div className='absolute top-10  bg-white border border-gray-400 px-5 py-5'>
                            <p className='border-b-2' onClick={() => handleOptionClicks('기부하기')}>기부하기</p>
                            <p onClick={() => handleOptionClicks('후원하기')}>후원하기</p>
                        </div>
                    )}
                    <img src="/assets/images/taemin_musicismylife.jpg" 
                        className="absolute bottom-0"
                        alt='music is my life'
                    />
                    

                </div>

                <div className="bg-orange-500 w-2/5 flex-auto flex-col border-solid border-r-2 border-slate-950">
                    <h1 className="text-center font-bebas_neue text-6xl">
                        CODE
                    </h1>

                    
                </div>

                <div className="bg-yellow-500 w-2/5 flex-col">
                    <h1 className="text-center font-bebas_neue text-6xl">
                        CHAT
                    </h1>

                    {/* texts printed here*/}
                    <div className="bg-white w-full flex-1 h-5/6">
                        {msg.map((message, index) => (
                            <Message key={index} {...message}/>
                        ))}
                    </div>

                    {/* chat input goes here */}
                    <div className="h-1/6">
                        <input type="text" placeholder="type here."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleEnter}
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