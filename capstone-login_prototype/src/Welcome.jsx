import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        //jsx goes here
        <div className="bg-gray-900">
            <div className="flex justify-center items-center h-screen">          
                <div className="text-center">
                    <div className="mb-10">
                        <p className="text-white text-8xl font-bebas_neue">welcome</p>
                    </div>
                    <div className="">
                        <img 
                        src="/assets/images/tech_pic.gif" 
                        alt="father chung" 
                        className="max-w-full mb-4 mx-auto h-1/2 w-1/2"/>
                        <Link to={"/login"}>
                            <button 
                                className="px-40
                                    py-20 
                                    bg-blue-500
                                    text-white 
                                    rounded
                                    text-8xl
                                    transition
                                    duration-300
                                    ease-in-out
                                    hover:rainbowChung">
                                LETS GO
                            </button>
                        </Link>
                    </div>   
                    <br></br>   
                </div>
            </div>
        </div>
    );
}

export default Welcome
