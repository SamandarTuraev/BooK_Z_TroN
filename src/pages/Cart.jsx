import PropTypes from "prop-types";

const Cart = ({ products, cartProducts, setCartProducts }) => {
   console.log(cartProducts, "");

   return (
      <>
         <h1>Products</h1>
         {cartProducts.length ? (
            cartProducts.map(
               (
                  {
                     imgSrc,
                     bookName,
                     author,
                     description,
                     rating,
                     discountedPrice,
                     originalPrice,
                     discountPercent,
                  },
                  idx
               ) => {
                  return (
                     <div className="single-product flex gap-12 mt-5" key={idx}>
                        <div className="single-product-right w-1/4">
                           <img
                              src={imgSrc}
                              alt={imgSrc}
                              style={{ width: "100%" }}
                           />
                        </div>
                        <div className="single-product-left w-3/4">
                           <h2 className="text-2xl mb-4">{bookName}</h2>
                           <hr />
                           <h3 className="text-lg mt-4"> Author: {author}</h3>
                           <p className="mt-4 pr-16">
                              {" "}
                              Description: {description}
                           </p>
                           <h3 className="text-lg mt-4">Rating: {rating}</h3>
                           <h3 className="text-lg mt-4 flex gap-3">
                              Rs{discountedPrice} <del>Rs{originalPrice}</del>
                              <span className="text-red-500">
                                 ({discountPercent}off%)
                              </span>
                           </h3>

                           <div className="mt-24 flex gap-4">
                              <button
                                 className="w-1/2 p-2  text-white"
                                 style={{
                                    backgroundColor: "rgb(219, 107, 138)",
                                    cursor: "pointer",
                                 }}
                                 onClick={""}
                              >
                                 Add to Wishlist
                              </button>
                              <button
                                 className="w-1/2 p-2  text-white "
                                 style={{
                                    backgroundColor: "rgb(255, 182, 73)",
                                    cursor: "pointer",
                                 }}
                                 onClick={""}
                              >
                                 Add to Cart
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
      </>
   );
};

export default Cart;

Cart.propTypes = {
   products: PropTypes.array,
   cartProducts: PropTypes.array,
   setCartProducts: PropTypes.func,
};
