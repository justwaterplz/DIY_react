import { Link } from 'react-router-dom';
const Header = () => {

    return(
        <div className="w-screen bg-yellow-500">
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
                <div className="flex-grow h-32">
                    <nav className="flex items-center h-32 ml-36">
                        <ul className="flex">
                            <li className="mr-14 font-custom">
                                <Link to="/about/brand">Brand</Link>
                            </li>
                            <li className="mr-14 font-custom">
                                <Link to="/menu">
                                    Menu
                                </Link>
                            </li>
                            <li className=" font-custom">
                                <Link to="/recruit">
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