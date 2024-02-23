// Map.jsx와 /about이란 url을 공유하는 페이지. 카페에 대한 간략한 설명 화면에 표시
const Brand = () => {

    return(
        <div>
            {/* slate space */}
            <div className="bg-slate-800 h-60 flex justify-center items-center">
                {/* some space for texts(yellow?) */}
                <div className="flex flex-col text-center">
                    <p className="text-white font-mono">SMILE CAFE STORY</p>
                    <br />
                    <p className="text-4xl font-mono text-yellow-300">SMILE CAFE</p>
                </div>
            </div>

            {/* some text chunks 1 on top, 3 on bottom */}
            <div></div>
            <div></div>
        </div>
    );
}
export default Brand;