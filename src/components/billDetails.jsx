import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const BillDetails = ({ cartProducts }) => {
   console.log(cartProducts, "bill");
   const [allDiscount, setAllDiscount] = useState(0);
   const [totalSum, setTotalSum] = useState(0);

   useEffect(() => {
      const num = cartProducts?.reduce((acc, el) => {
         acc += el.quantity * (el.originalPrice - el.discountedPrice);
         return acc;
      }, 0);
      setAllDiscount(num);
   }, [cartProducts]);

   useEffect(() => {
      const sum = cartProducts?.reduce((acc, el) => {
         acc += el.discountedPrice * el.quantity;
         return acc;
      }, 0);
      setTotalSum(sum);
   }, [cartProducts]);

   return (
      <div className="bill w-2/5 p-6 border-2 border-current ">
         <h2 className="text-center text-4xl  mb-4"> Bill Details</h2>
         <div className="bg-black h-[0.5px]" />
         <div>
            {cartProducts.map((cart) => {
               return (
                  <div key={cart._id} className="flex mt-8 mb-8">
                     <h3 className="w-[50%] text-center">{cart.bookName}</h3>{" "}
                     <h3 className="w-[25%] text-center">X {cart.quantity}</h3>
                     <h3 className="w-[25%] text-center">
                        R{Number(cart.quantity) * Number(cart.discountedPrice)}
                     </h3>
                  </div>
               );
            })}
         </div>
         <div className="bg-black h-[0.5px] mt-8 mb-8" />
         <div>
            <div className="flex justify-between">
               <h3 className="w-[50%] text-center ">Discount</h3>
               <h3 className="w-[25%] text-center ">R{allDiscount}</h3>
            </div>
            <div className="flex justify-between mt-4">
               <h3 className="w-[50%] text-center ">Delivery Charges</h3>
               <h3 className="w-[25%] text-center ">R50</h3>
            </div>
         </div>
         <div className="bg-black h-[0.5px] mt-8 mb-8" />
         <div>
            <div className="flex justify-between">
               <h3 className="w-[50%] text-center font-bold">Total Charges</h3>
               <h3 className="w-[25%] text-center font-bold">R{totalSum}</h3>
            </div>
         </div>
         <div className="bg-black h-[0.5px] mt-8 mb-8" />
         <div>
            <div className="flex justify-between mt-8 items-center">
               <h3 className="w-[50%] ">Apply Coupon</h3>
               <Input className="w-[35%]  " placeholder="Try BOOKS200" />
            </div>
         </div>
         <Link to={"/order"} className=" ">
            <Button className="w-[100%] bg-green-400 hover:bg-green-600 mt-8">
               Place Order
            </Button>
         </Link>
      </div>
   );
};

export default BillDetails;

BillDetails.propTypes = {
   cartProducts: PropTypes.any,
};
