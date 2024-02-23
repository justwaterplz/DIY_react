// Map.jsx와 /about이란 url을 공유하는 페이지. 카페에 대한 간략한 설명 화면에 표시
const Brand = () => {

    return(
        <div className="h-screen">
            {/* slate space */}
            <div className="bg-slate-800 h-60 flex justify-center items-center">
                {/* some space for texts(yellow?) */}
                <div className="flex flex-col text-center">
                    <p className="text-white font-mono">SMILE CAFE STORY</p>
                    <br />
                    <p className="text-4xl font-mono text-yellow-300">SMILE CAFE</p>
                </div>
            </div>

            {/* lower part of this page. */}
            <div className="flex-grow  bg-teal-300 flex flex-col space-y-4 items-center">
                
                {/* 1. space for some text chunks  */}
                <div className="grid grid-rows-[auto_1fr] gap-4 min-h-[80vh] bg-blue-300 p-4 text-center">
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
                <div className="bg-fuchsia-300 w-full max-w-6xl mx-auto p-6 flex justify-between min-h-[80vh]">
                    {/* area for paragraph */}
                    <div className="bg-white w-1/2 h-full">
                        <p className="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, illum. Nisi incidunt magni reprehenderit, ut asperiores porro similique minus cumque non ad obcaecati quis, accusantium impedit dignissimos architecto dolorum aliquam?
                        </p>
                    </div>
                    {/* area for brief image */}
                    <div className="bg-black w-1/2 h-2/3">
                        <img src="/images/content/main_page/smile.webp" alt="brand_image" 
                        className="mt-10 ml-6"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Brand;