import PropTypes from "prop-types";
import { useState } from "react";

const Cart = ({ cartProducts, setCartProducts, wishList, setWishList }) => {
   const [count, setCount] = useState(1);
   console.log(cartProducts, "");

   const handleWishlistBtn = (id) => {
      const el = wishList.find((cart) => cart._id === id);

      if (!el) {
         setWishList((prev) => [
            ...prev,
            cartProducts.find((arr) => arr._id === id),
         ]);
      }
      console.log(wishList);
   };

   const onDeldeteCart = (id) => {
      setCartProducts((prev) => prev.filter((cart) => cart._id !== id));
   };
   return (
      <>
         <h1 className="text-center text-4xl mt-4 ">
            {cartProducts.length} items in Cart
         </h1>
         <div className="flex justify-center gap-16 mt-6">
            <div className="w-2/5">
               {cartProducts.length ? (
                  cartProducts.map(
                     (
                        {
                           _id,
                           imgSrc,
                           bookName,
                           author,
                           discountedPrice,
                           originalPrice,
                           discountPercent,
                        },
                        idx
                     ) => {
                        return (
                           <div
                              className="single-product flex gap-4 mb-6"
                              key={idx}
                           >
                              <div className="single-product-right w-1/3">
                                 <img
                                    src={imgSrc}
                                    alt={imgSrc}
                                    style={{ width: "100%" }}
                                 />
                              </div>
                              <div className="single-product-left w-2/3">
                                 <h2 className=" mb-2">{bookName}</h2>
                                 <hr />
                                 <h3 className=" mt-2"> Author: {author}</h3>
                                 <div>
                                    Quantity{" "}
                                    <button
                                       className="bg-slate-500 px-2  text-white rounded-full "
                                       onClick={() =>
                                          setCount((prev) => prev - 1)
                                       }
                                    >
                                       -
                                    </button>
                                    <input
                                       type="number"
                                       defaultValue={1}
                                       value={count}
                                       className="border-2 border-current w-[50px] m-4"
                                       onChange={(e) =>
                                          setCount(e.target.value)
                                       }
                                    />
                                    <button
                                       className="bg-slate-500 px-2  text-white rounded-full "
                                       onClick={() =>
                                          setCount((prev) => prev + 1)
                                       }
                                    >
                                       +
                                    </button>
                                 </div>
                                 <h3 className=" mt-2 flex gap-3">
                                    Rs{discountedPrice}{" "}
                                    <del>Rs{originalPrice}</del>
                                    <span className="text-red-500">
                                       ({discountPercent}off%)
                                    </span>
                                 </h3>

                                 <div className="mt-4 ">
                                    <button
                                       className="w-[100%] p-2  text-white rounded"
                                       style={{
                                          backgroundColor: "rgb(255, 182, 73)",
                                          cursor: "pointer",
                                       }}
                                       onClick={() => handleWishlistBtn(_id)}
                                    >
                                       Add to Wishlist
                                    </button>
                                    <button
                                       className="w-[100%] p-2 mt-2 text-white rounded "
                                       style={{
                                          backgroundColor: "rgb(219, 107, 138)",
                                          cursor: "pointer",
                                       }}
                                       onClick={() => onDeldeteCart(_id)}
                                    >
                                       Remove from Cart
                                    </button>
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  )
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
