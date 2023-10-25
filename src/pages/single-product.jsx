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
            console.log("hello");
            setProduct(data);
         }
      });
   }, [products]);

   const handleWishlistBtn = () => {
      const el = wishList.find((wishItem) => wishItem._id === id);

      if (!el) {
         setWishList((prev) => [
            ...prev,
            products.find((arr) => arr._id === id),
         ]);
      }
      console.log(wishList);
   };

   const handleCartBtn = () => {
      const el = cartProducts.find((cart) => cart._id === id);

      if (!el) {
         setCartProducts((prev) => [
            ...prev,
            products.find((arr) => arr._id === id),
         ]);
      }
      console.log(cartProducts);
   };
   return (
      <div className="single-product flex gap-12 mt-5">
         <div className="single-product-right w-1/4">
            <img src={imgSrc} alt={imgSrc} style={{ width: "100%" }} />
         </div>
         <div className="single-product-left w-3/4">
            <h2 className="text-2xl mb-4">{bookName}</h2>
            <hr />
            <h3 className="text-lg mt-4"> Author: {author}</h3>
            <p className="mt-4 pr-16"> Description: {description}</p>
            <h3 className="text-lg mt-4">Rating: {rating}</h3>
            <h3 className="text-lg mt-4 flex gap-3">
               Rs{discountedPrice} <del>Rs{originalPrice}</del>
               <span className="text-red-500">({discountPercent}off%)</span>
            </h3>

            <div className="mt-24 flex gap-4">
               <button
                  className="w-1/2 p-2  text-white"
                  style={{
                     backgroundColor: "rgb(219, 107, 138)",
                     cursor: "pointer",
                  }}
                  onClick={handleWishlistBtn}
               >
                  Add to Wishlist
               </button>
               <button
                  className="w-1/2 p-2  text-white "
                  style={{
                     backgroundColor: "rgb(255, 182, 73)",
                     cursor: "pointer",
                  }}
                  onClick={handleCartBtn}
               >
                  Add to Cart
               </button>
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
