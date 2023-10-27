import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

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
                     className="rounded-lg bg-blue-400 p-2 text-white"
                  >
                     Shop
                  </Link>
                  <Link
                     to={"/wishlist"}
                     className="rounded-lg bg-blue-400 p-2 text-white Alink"
                  >
                     <span className="linkTop"> {wishList.length} </span>
                     Wishlist
                  </Link>
                  <Link
                     to={"/cart"}
                     className="rounded-lg bg-blue-400 p-2 text-white Alink"
                  >
                     <span className="linkTop"> {cartProducts.length} </span>
                     Cart
                  </Link>
                  <Link
                     to={"/"}
                     className="rounded-lg bg-blue-400 p-2 text-white"
                  >
                     Orders
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
