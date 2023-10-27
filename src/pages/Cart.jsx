import BasketCard from "@/components/basketCard";
import PropTypes from "prop-types";
import { useState } from "react";

const Cart = ({ cartProducts, setCartProducts, wishList, setWishList }) => {
   return (
      <>
         <h1 className="text-center text-4xl mt-4 ">
            {cartProducts.length} items in Cart
         </h1>
         <div className="flex justify-center gap-16 mt-6">
            <div className="w-2/5">
               {cartProducts.length ? (
                  cartProducts.map((product, idx) => (
                     <BasketCard
                        key={idx}
                        product={product}
                        setCartProducts={setCartProducts}
                        cartProducts={cartProducts}
                        wishList={wishList}
                        setWishList={setWishList}
                     />
                  ))
               ) : (
                  <h2> Not Products</h2>
               )}
            </div>
            <div className="w-2/5 p-6 border-2 border-current ">
               <h2 className="text-center text-4xl  mb-4"> Bill Details</h2>
               <div className="bg-black h-[0.5px]" />
            </div>
         </div>
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
