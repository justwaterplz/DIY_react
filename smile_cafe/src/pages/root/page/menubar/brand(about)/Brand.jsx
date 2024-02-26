// Map.jsx와 /about이란 url을 공유하는 페이지. 카페에 대한 간략한 설명 화면에 표시
import { useEffect, useState } from "react";
const Brand = () => {

    //slate인 부분 애니메이션 구현하기
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(240);
        //h-60 is equal to 240px
    }, []);

    return(
        <div className="h-screen">
            {/* slate space */}
            <div className="bg-slate-800 flex justify-center items-center transition-all duration-700 ease-in-out" style={{ height: `${height}px` }}>
                {/* some space for texts(yellow?) */}
                <div className="flex flex-col text-center">
                    <p className="text-white font-mono">SMILE CAFE STORY</p>
                    <br />
                    <p className="text-4xl font-mono text-yellow-300">SMILE CAFE</p>
                </div>
            </div>

            {/* lower part of this page. */}
            <div className="flex-grow  flex flex-col space-y-4 items-center">
                
                {/* 1. space for some text chunks  */}
                <div className="grid grid-rows-[auto_1fr] gap-4 min-h-[80vh]  p-4 text-center">
                    {/* text area */}
                    <div className="space-y-4">
                        {/* upper chunk */}
                        <div className="mt-4 ">
                            <p className="font-noto_sans_kr text-4xl mb-6">달란트로 즐기는 커피! 최대 2잔</p>

                            <span className="text-6xl font-noto_sans_kr">SWEET</span>

                            <p className="font-noto_sans_kr text-4xl mt-8 mb-4">
                                부담스럽지 않은 가격과 대용량으로
                            </p>
                            <p className="font-noto_sans_kr text-4xl">
                                모든 사람들에게 사랑받는 Smile Cafe                            
                            </p>
                        </div>

                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {/* lower chunk */}
                            <div className="bg-white p-4 shadow rounded-lg mt-6 size-60 font-noto_sans_kr border-4">
                                <p className="text-yellow-400 text-4xl font-custom">BIG</p>

                                <div className="mt-3">
                                    <p className="text-3xl">대용량</p>

                                    <p className="mt-7">큰 사이즈로</p>
                                    <p>
                                        <span className="bg-yellow-200">친구들</span>
                                        과 함께 즐기세요
                                    </p>
                                </div>


                            </div>
                            <div className="bg-white p-4 shadow rounded-lg mt-6 size-60 font-noto_sans_kr">
                                <p className="text-yellow-400 text-4xl font-custom">VARIETY</p>

                                {/* 박스에 들어갈 텍스트 */}
                                <div className=" mt-3">
                                    <p className="text-3xl">다양화</p>

                                    <p className="mt-2">여러분이 원하는 메뉴로</p>
                                    <p>매번 더 다양해집니다.</p>
                                    <br />
                                    <p>
                                        <span className="bg-yellow-200">선생님</span>
                                        께 꼭 말해주세요
                                    </p>
                                </div>
                                
                            </div>
                            <div className="bg-white p-4 shadow rounded-lg mt-6 size-60">
                                <p className="text-yellow-400 text-4xl font-custom">EVENT</p>

                                <div className="font-noto_sans_kr mt-3">
                                    <p className="text-3xl">이벤트</p>

                                    
                                    <p className="mt-2">달란트가 없더라도</p>
                                    <p>실망하지 마세요</p>

                                    <p>
                                        <span className="bg-yellow-200 px-1">일일 도우미</span>, 
                                        <span className="bg-yellow-200 px-1">춤추기</span>
                                    </p>
                                    <p>
                                        <span className="bg-green-200 px-1">공짜 음료수 이벤트</span>가 잔뜩!
                                    </p>
                                </div>
                                
                            </div>
                        </div> 
                    </div>
                </div>

                {/* 2. space for brief summary */}
                <div className=" w-full max-w-6xl mx-auto p-6 flex justify-between min-h-[80vh] ">
                    {/* area for paragraph */}
                    <div className="bg-white flex-1 flex flex-col p-4 justify-center ">
                        <div className="ml-14 font-noto_sans_kr">
                            <p className="text-6xl">
                                SMILE CAFE
                            </p>
                            <p className="text-6xl">CONCEPT</p>

                            <br />
                            <p>
                                SMILE CAFE 수영점은, 음료 및 디저트 전문점으로
                            </p>
                            <p>
                                다양한 음료와 디저트를 맛 보실수 있습니다.
                            </p>
                            <p>노력한 만큼 더 맛있다!</p>
                            <p>
                                우수한 품질의 음료를 합리적인 가격으로 제공하며
                            </p>
                            <p>
                                다양한 이벤트와 혜택이 있습니다.
                            </p>
                        </div>
                        
                    </div>
                    {/* area for brief image */}
                    <div className="bg-white w-1/2 h-2/3">
                        <img src="/images/content/main_page/smile.webp" alt="brand_image" 
                        className="mt-10 ml-6"/>
                    </div>
                </div>

                {/* 3. cafe history */}
                <div className="flex flex-col bg-white w-full max-w-6xl mx-auto p-6 justify-around min-h-[80vh] space-y-4">

                    {/* space for text */}       
                    <div className="flex items-center justify-center">
                        <p className="text-center font-noto_sans_kr text-6xl mt-10">연혁</p>
                    </div>


                    <div className="flex justify-center items-center w-full mt-32 mb-32 font-noto_sans_kr">
                        {/* first circle */}
                        <div className="bg-white rounded-full size-48 flex items-center justify-center text-center z-10 flex-col border-2
                        border-yellow-500">
                            <p className="text-xl px-3 ">2024.02.15</p>
                            <br />
                            <p className="text-sm px-3">첫 오픈</p>
                        </div>

                        {/* connecting line */}
                        <div className="w-20  bg-black" style={{ height: '2px' }}></div>

                        {/* second circle */}
                        <div className="bg-white rounded-full size-48 flex items-center justify-center text-center z-10 flex-col border-2 border-yellow-500">
                            <p className="text-xl px-3">2024 여름방학</p>
                            <br />
                            <p className="text-sm px-3">기대해주세요</p>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    );
}
export default Brand;