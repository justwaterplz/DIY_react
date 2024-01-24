import { useState, useEffect } from 'react';
const Login = () => {

    const lines = [
        "I have brought peace, freedom, justice, and security to my new empire.",
        "Your new Empire?",
        "Don't make me kill you...",
        "Anakin, my allegiance is to the Republic. To Democracy!",
        "If you're not with me, then you're my enemy.",
        "Only a Sith deals in absolutes.",
        "I will do what I must",
    ]

    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => {

                const currentLine = lines[currentLineIndex];
                if(prevIndex < currentLine.split(' ').length - 1){
                    return prevIndex + 1;
                }else{
                    setCurrentLineIndex((prevLineIndex) => (prevLineIndex + 1) % lines.length);
                    return -1;
                }
            });
        }, 500);

        return () => clearInterval(interval);
    }, [currentLineIndex, currentWordIndex, lines]);

    const currentLine = lines[currentLineIndex].split(' ');
    const displayedWords = currentLine
    .slice(0, currentWordIndex + 1)
    .map((word, index, array) => (index === 4 && index !== array.length - 1 ? `${word}\n` : word)) // Add a line break after the fifth word
    .join(' ');

    return (
        <div className="min-h-screen flex">
            {/* 왼쪽부터 60%만 노란색 */}
            <div className="flex bg-yellow-300 w-3/4  items-center justify-center">
                <div className="text-center mb-10 relative whitespace-pre-wrap">
                    <p className="font-bebas_neue text-4xl mb-4">asdf</p>
                    <img src="public/assets/images/starwars.gif" alt="Your Image" className="mb-4 mx-auto" />

                    <div className="text-center ">
                            {/* 문장 생성될때마다 이미지 들썩거려서 위치 고정함 */}
                        <p className="absolute top-auto left-1/2 transform -translate-x-1/2 font-bebas_neue text-orange-700 text-3xl">
                            {displayedWords}
                        </p>
                    </div>

                </div>
            </div>

            <div className="flex-grow bg-blue-300 w-1/4">
                <div className="text-center mb-10 flex flex-col items-center justify-center h-full">
                    <p className="text-2xl font-bebas_neue mb-20">Login</p>

                    <div className="flex flex-col w-1/2">
                        <div className="flex items-center mb-2">
                            <label htmlFor="username" className="block text-2xl font-bebas_neue text-gray-700 mr-2">
                                Username
                            </label>

                            <input
                            type="text"
                            placeholder="username"
                            className="block w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="flex items-center mb-2">
                                <label htmlFor="password" className="block text-2xl font-bebas_neue text-gray-700 mr-2">
                            Password
                            </label>
                            <input
                            type="password"
                            placeholder="password"
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-1/2">
                        <button className="px-2 py-2 bg-gray-800 text-white rounded flex-grow">Login</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Login
