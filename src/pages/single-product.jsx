import PropTypes from "prop-types";
import { instance } from "@/utils/use-request";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SingleProduct({
   wishList,
   setWishList,
   cartProducts,
   setCartProducts,
}) {
   const location = useLocation();
   let id = location.pathname.slice(9);

   const [products, setProducts] = useState([]);
   const [product, setProduct] = useState({});
   const {
      imgSrc,
      bookName,
      author,
      description,
      rating,
      discountedPrice,
      originalPrice,
      discountPercent,
   } = product;

   useEffect(() => {
      (async () => {
         const data = await instance.get("/home/products");
         setProducts(data.data?.productsList);
      })();
   }, []);

   useEffect(() => {
      products.forEach((data) => {
         if (data._id == id) {
            setProduct(data);
         }
      });
   }, [products, product]);

   const handleWishlistAdd = () => {
      setWishList((prev) => [...prev, products.find((arr) => arr._id === id)]);
   };
   const handleWishlistRemove = () => {
      setWishList((prev) => [...prev.filter((card) => card._id !== id)]);
   };

   const handleCartAdd = () => {
      setCartProducts((prev) => [
         ...prev,
         products.find((arr) => arr._id === id),
      ]);
   };

   const handleCartRemove = () => {
      setCartProducts((prev) => [...prev.filter((cart) => cart._id !== id)]);
   };

   return (
      <div className="single-product flex gap-16 mt-28 justify-center ">
         <div className="single-product-right w-1/4">
            <img src={imgSrc} alt={imgSrc} style={{ width: "100%" }} />
         </div>
         <div className="single-product-left w-1/2 mt-8">
            <h2 className="text-2xl mb-4 font-black">{bookName}</h2>
            <hr />
            <h3 className="text-lg mt-4">
               {" "}
               <span className="font-black">Author:</span> {author}
            </h3>
            <p className="mt-4 pr-16">
               {" "}
               <span className="font-black">Description:</span> {description}
            </p>
            <h3 className="text-lg mt-4">
               <span className="font-black">Rating: </span>
               {rating}
            </h3>
            <h3 className="text-lg mt-4 flex gap-3 font-black">
               Rs{discountedPrice} <del>Rs{originalPrice}</del>
               <span className="text-red-500 text-sm pt-1">
                  ({discountPercent}off%)
               </span>
            </h3>

            <div className="mt-24 flex gap-4">
               {wishList.find((wishItem) => wishItem._id === id) ? (
                  <button
                     className="w-1/2 p-2  text-white rounded "
                     style={{
                        backgroundColor: "red",
                        cursor: "pointer",
                     }}
                     onClick={handleWishlistRemove}
                  >
                     Delete to Wishlist
                  </button>
               ) : (
                  <button
                     className="w-1/2 p-2  text-white rounded"
                     style={{
                        backgroundColor: "rgb(219, 107, 138)",
                        cursor: "pointer",
                     }}
                     onClick={handleWishlistAdd}
                  >
                     Add to Wishlist
                  </button>
               )}
               {cartProducts.find((cart) => cart._id === id) ? (
                  <button
                     className="w-1/2 p-2  text-white rounded "
                     style={{
                        backgroundColor: "red",
                        cursor: "pointer",
                     }}
                     onClick={handleCartRemove}
                  >
                     Delete to Cart
                  </button>
               ) : (
                  <button
                     className="w-1/2 p-2  text-white rounded "
                     style={{
                        backgroundColor: "rgb(255, 182, 73)",
                        cursor: "pointer",
                     }}
                     onClick={handleCartAdd}
                  >
                     Add to Cart
                  </button>
               )}
            </div>
         </div>
      </div>
   );
}
export default SingleProduct;

SingleProduct.propTypes = {
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
   cartProducts: PropTypes.array,
   setCartProducts: PropTypes.func,
};
