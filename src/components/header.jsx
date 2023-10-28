import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

import { AiFillShopping, AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsShop } from "react-icons/bs";
function Header({ isLogged, setIsLogged, cartProducts, wishList }) {
   const onLogout = () => {
      localStorage.removeItem("access_token");
      setIsLogged("");
   };
   const location = useLocation();
   let path = location.pathname;

   return (
      <header className="flex justify-between py-6 px-2  border-b-2">
         <Link to={"/"} className="rounded-lg bg-yellow-400 p-2">
            BooK_Z_TroN
         </Link>
         <div className="flex gap-3">
            {path == "/login" ? (
               ""
            ) : (
               <div className="flex gap-3">
                  <Link
                     to={"/shop"}
                     className="rounded-full bg-[#0e7490] flex items-center justify-center w-[40px] h-[40px] transition-all Alink hover:bg-[#05475a]"
                  >
                     {<BsShop className="text-white text-lg" />}
                  </Link>
                  <Link
                     to={"/wishlist"}
                     className="rounded-full bg-[#0e7490] flex items-center justify-center w-[40px] h-[40px] transition-all Alink hover:bg-[#05475a]"
                  >
                     <span className="linkTop"> {wishList.length} </span>
                     {<AiOutlineHeart className="text-white text-lg" />}
                  </Link>

                  <Link
                     to={"/cart"}
                     className="rounded-full bg-[#0e7490] flex items-center justify-center w-[40px] h-[40px] transition-all Alink hover:bg-[#05475a]"
                  >
                     <span className="linkTop"> {cartProducts.length} </span>
                     {<SlBasket className="text-white text-lg" />}
                  </Link>

                  <Link
                     to={"/order"}
                     className="rounded-full bg-[#0e7490] flex items-center justify-center w-[40px] h-[40px] transition-all Alink hover:bg-[#05475a]"
                  >
                     {<AiFillShopping className="text-white text-lg" />}
                  </Link>
                  {isLogged == "" ? (
                     ""
                  ) : (
                     <Link to={"/"}>
                        <Button onClick={onLogout}>Logout</Button>
                     </Link>
                  )}
               </div>
            )}

            {isLogged == "" ? (
               <Link to={"/login"} className="text-white text-white">
                  <Button>Login</Button>
               </Link>
            ) : (
               ""
            )}
         </div>
      </header>
   );
}
export default Header;

Header.propTypes = {
   isLogged: PropTypes.any,
   setIsLogged: PropTypes.func,
   wishList: PropTypes.array,
   cartProducts: PropTypes.array,
};
