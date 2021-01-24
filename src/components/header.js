import { BiRefresh, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const Header = ()=>{
    return(
        <div className="header-container">
           
        <div className="header">
        <input type="search" />
            <BiSearch /> 
            
            <span>SIGN IN</span>
            <BiRefresh />
            <HiOutlineShoppingBag />
        </div>
        </div>
    )
}
export default Header;