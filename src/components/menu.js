
//  <Link className="option" to="/shop">
//  SHOP
// </Link>
// <Link className="option" to="/contact">
//  CONTACT
// </Link>
import { Link } from "react-router-dom";

const Menu = ()=>{
    return(
        <ul class="link-container">
            <li>
            HOME
            </li>
            <li>
                
CATEGORIES
            </li>
            <Link className="option" to="/craft">
          CRAFTS
        </Link>
       
            <li>
            HOME DECOR
            </li>
            <li>
                
APPAREL
            </li>
            <li>FOOTWEAR</li>
            <li>
ACCESSORIES</li>
            <li>
CRAFTS MAP</li>
        </ul>
        )
    
    }
    export default Menu;
    