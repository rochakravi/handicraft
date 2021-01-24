
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
           
            <Link className="option" to="/">
            HOME
        </Link>
            </li>
            <li>
            <Link className="option" to="/cat">
            CATEGORIES
        </Link>
                

            </li>
            <Link className="option" to="/craft">
          CRAFTS
        </Link>
       
            <li>
            
            <Link className="option" to="/homed">
            HOME DECOR
        </Link>
            </li>
            <li>
                

<Link className="option" to="/apprel">
APPAREL
        </Link>
            </li>
            <li>
            <Link className="option" to="/foot">
            FOOTWEAR
        </Link>
            </li>
            <li>
            <Link className="option" to="/asc">
            ACCESSORIES
        </Link>
</li>
            <li>
            <Link className="option" to="/map">
            CRAFTS MAP
        </Link>
</li>
        </ul>
        )
    
    }
    export default Menu;
    