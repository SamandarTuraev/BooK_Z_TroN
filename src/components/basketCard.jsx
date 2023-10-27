import PropTypes from "prop-types";
import { useState } from "react";
const BasketCard = ({
   cartProducts,
   setCartProducts,
   wishList,
   setWishList,
   product,
}) => {
   const [count, setCount] = useState(1);
   const {
      imgSrc,
      bookName,
      author,
      discountedPrice,
      originalPrice,
      discountPercent,
      _id,
   } = product;

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
      <div className="single-product flex gap-4 mb-6">
         <div className="single-product-right w-1/3">
            <img src={imgSrc} alt={imgSrc} style={{ width: "100%" }} />
         </div>
         <div className="single-product-left w-2/3">
            <h2 className=" mb-2">{bookName}</h2>
            <hr />
            <h3 className=" mt-2"> Author: {author}</h3>
            <div>
               Quantity{" "}
               <button
                  className="bg-slate-500 px-2  text-white rounded-full "
                  onClick={() => setCount((prev) => prev - 1)}
               >
                  -
               </button>
               <input
                  type="number"
                  defaultValue={1}
                  value={count}
                  className="border-2 border-current w-[50px] m-4"
                  onChange={(e) => setCount(e.target.value)}
               />
               <button
                  className="bg-slate-500 px-2  text-white rounded-full "
                  onClick={() => setCount((prev) => prev + 1)}
               >
                  +
               </button>
            </div>
            <h3 className=" mt-2 flex gap-3">
               Rs{discountedPrice} <del>Rs{originalPrice}</del>
               <span className="text-red-500">({discountPercent}off%)</span>
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
};

export default BasketCard;
BasketCard.propTypes = {
   cartProducts: PropTypes.array,
   setCartProducts: PropTypes.func,
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
   product: PropTypes.any,
};
