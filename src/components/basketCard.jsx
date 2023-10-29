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

   const handleWishlistAdd = (id) => {
      setWishList((prev) => [
         ...prev,
         cartProducts.find((arr) => arr._id === id),
      ]);
   };
   const handleWishlistRemove = (id) => {
      setWishList((prev) => [...prev.filter((card) => card._id !== id)]);
   };

   const onDeldeteCart = (id) => {
      setCartProducts((prev) => prev.filter((cart) => cart._id !== id));
   };

   return (
      <div className="single-product flex gap-8 mb-8">
         <div className="single-product-right w-2/5">
            <img src={imgSrc} alt={imgSrc} style={{ width: "100%" }} />
         </div>
         <div className="single-product-left w-3/5 ps-4 pt-2   ">
            <h2 className=" mb-2 font-bold">{bookName}</h2>
            <hr />
            <h3 className=" mt-2">
               {" "}
               <span className="font-bold">Author</span>: {author}
            </h3>
            <div>
               <span className="mr-4 font-bold"> Quantity </span>
               <button
                  className=" px-2   rounded-full border border-solid border-slate-300 text-center"
                  onClick={() =>
                     setCount((prev) => (prev == 0 ? prev : prev - 1))
                  }
               >
                  -
               </button>
               <input
                  type="number"
                  defaultValue={1}
                  value={count}
                  className="border border-current w-[50px] m-4 text-center font-bold"
                  onChange={(e) => setCount(e.target.value)}
                  min="0"
               />
               <button
                  className=" px-2   rounded-full border border-solid border-slate-300 text-center"
                  onClick={() => setCount((prev) => Number(prev) + 1)}
               >
                  +
               </button>
            </div>
            <h3 className=" mt-2 flex gap-3">
               Rs{discountedPrice} <del>Rs{originalPrice}</del>
               <span className="text-red-500">({discountPercent}off%)</span>
            </h3>

            <div className="mt-4 ">
               {wishList.find((wishItem) => wishItem._id === _id) ? (
                  <button
                     className="w-[100%] p-2  text-white rounded "
                     style={{
                        backgroundColor: "red",
                        cursor: "pointer",
                     }}
                     onClick={() => handleWishlistRemove(_id)}
                  >
                     Delete to Wishlist
                  </button>
               ) : (
                  <button
                     className="w-[100%] p-2  text-white rounded"
                     style={{
                        backgroundColor: "rgb(255, 182, 73)",
                        cursor: "pointer",
                     }}
                     onClick={() => handleWishlistAdd(_id)}
                  >
                     Add to Wishlist
                  </button>
               )}

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
