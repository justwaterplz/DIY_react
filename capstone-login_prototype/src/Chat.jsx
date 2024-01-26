//채팅창 화면 구현
const Chat = () => {


    return(
        //flex container
        <div className="flex-col h-screen">
            {/* header */}
            <div className="bg-slate-600 w-screen h-28">
                {/* pressing this button leads to welcome page or login page */}
                <button className="h-28">
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
                <div className="bg-red-500 h-screen w-1/5">
                    <h1>red</h1>
                </div>
                
                <div className="bg-orange-500 h-screen flex-auto">
                    <h1>red</h1>
                </div>

                <div className="bg-yellow-500 h-screen w-1/5">
                    <h1>red</h1>
                </div>
            </div>
            {/* 1. option and avatar part */}
            
        </div>
    );
}

export default Chat;