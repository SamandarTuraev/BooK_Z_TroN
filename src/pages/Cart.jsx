import BasketCard from "@/components/basketCard";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import basketIcon from "../Assets/icons/basket-icon.svg";
import BillDetails from "@/components/billDetails";

const Cart = ({ cartProducts, setCartProducts, wishList, setWishList }) => {
   return (
      <>
         {cartProducts.length ? (
            <div className="flex justify-center gap-16 mt-32">
               <div className="w-2/5">
                  {cartProducts.map((product, idx) => (
                     <BasketCard
                        key={idx}
                        product={product}
                        setCartProducts={setCartProducts}
                        cartProducts={cartProducts}
                        wishList={wishList}
                        setWishList={setWishList}
                     />
                  ))}
               </div>
               <BillDetails cartProducts={cartProducts} />
            </div>
         ) : (
            <div className="py-16 mw-[100%] flex flex-col justify-center items-center mt-24">
               <h1 className="text-2xl">
                  <b>0 items in Cart</b>
               </h1>
               <div className="max-w-[15%]">
                  <img src={basketIcon} alt="heart" />
               </div>
               <h1 className="text-2xl">
                  <b>Your cart is empty 🙃</b>
               </h1>
               <Link
                  to="/shop"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#BD5D78] mt-4"
               >
                  Go to shop
               </Link>
            </div>
         )}
      </>
   );
};

export default Cart;

Cart.propTypes = {
   cartProducts: PropTypes.array,
   setCartProducts: PropTypes.func,
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
   products: PropTypes.array,
};
