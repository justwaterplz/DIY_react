import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

    //header hovering state
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    //active된 메뉴
    const [activeMenu, setActiveMenu] = useState(null);

    //menu hovering state
    // const [isMenuHovered, setIsMenuHovered] = useState(false);

    const handleHeaderHover = () => setIsHeaderHovered(true);
    const handleHeaderMouseOut = () => setIsHeaderHovered(false);

    const handleMenuHover = (menu) => setActiveMenu(menu);
    const handleMenuMouseOut = () => setActiveMenu(null);

    

    return(
        <div className={`w-screen transition-duration-300 border-gray-400 border-b-2 h-full
        ${isHeaderHovered ? 'bg-white hover:bg-white' : 'bg-yellow-500 hover:bg-yellow-500'}
        ${isHeaderHovered ? 'h-full' : 'h-32' } 
        transition ease-in-out`
        }
        onMouseEnter={
            () => {
                console.log('mouse over')
                setIsHeaderHovered(true)
            }
        }
        onMouseLeave={() => {
            console.log('mouse out');
            setIsHeaderHovered(false)
        }}>
            {/* 전체 header space */}
            <div className="h-32 flex items-center justify-between px-4">
            {/* logo, img 들어갈 공간 */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <span className="font-custom text-4xl">
                            SMILE
                        </span>
                        <img src="/images/header/header_icon.jpg" alt="logo" className="w-16 h-16 ml-2"/>
                        <span className="font-custom text-4xl">
                            CAFE
                        </span>
                    </Link>
                </div>

                {/* nav-bar */}
                <div className="flex-grow h-full justify-center items-center ">
                    <nav className="flex items-center ml-36 h-full">
                        <ul className="flex items-center">
                            <li className={`mr-14 font-custom group relative 
                            ${
                                activeMenu === 'brand' ? 'active' : ''
                            }`}
                            onMouseOver={() => handleMenuHover('brand')}
                            onMouseOut={handleMenuMouseOut}>
                                <Link to="/about/brand" className="inline-block items-center" style={{ height: 'inherit' }}>
                                    Brand
                                </Link>

                                {/* submenu - shown when it's hovered */}
                                <div className={`absolute hidden group-hover:flex flex-col mr-4 mb-2 bg-white shadow-md mt-1 font-noto_sans_kr 
                                ${activeMenu === 'brand' ? 'visible' : 'invisible' }`}
                                style={{ minHeight: '100px', left: '-20px', zIndex: 10 }}>
                                    <Link to="/about/brand" className='block px-4 py-2 hover:bg-gray-100 whitespace-nowrap'>브랜드</Link>
                                    <Link to="/about/map" className='block px-4 py-2 hover:bg-gray-100 whitespace-nowrap'>오시는 길</Link>
                                </div>
                            </li>
                            <li className="mr-14 font-custom">
                                <Link to="/menu" className='hover:text-black'>
                                    Menu
                                </Link>
                            </li>
                            <li className=" font-custom">
                                <Link to="/recruit" className='hover:text-black'>
                                    Recruit
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                
            </div>
        </div>
        
    )
}
export default Header;