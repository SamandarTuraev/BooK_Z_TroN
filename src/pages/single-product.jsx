import { instance } from "@/utils/use-request";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SingleProduct() {
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

   console.log(product);
   console.log(products);

   return (
      <div className="single-product flex gap-12 mt-5">
         <div className="single-product-right w-2/3">
            <img src={imgSrc} alt={imgSrc} />
         </div>
         <div className="single-product-left">
            <h2 className="">{bookName}</h2>
            <hr />
            <h3>{author}</h3>
            <p>{description}</p>
            <h3>{rating}</h3>
            <h3>
               Rs{discountedPrice} <del>Rs{originalPrice}</del>
               <span className="text-red">({discountPercent}%)</span>
            </h3>
         </div>
      </div>
   );
}
export default SingleProduct;
