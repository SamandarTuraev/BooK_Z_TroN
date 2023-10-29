import { Link } from "react-router-dom";
import orderIcon from "../Assets/icons/order-icon.svg";
function Order() {
   return (
      <div className="py-16 mw-[100%] flex flex-col justify-center items-center mt-24">
         <h1 className="text-2xl">
            <b>0 items in your Orders</b>
         </h1>
         <div className="max-w-[25%]">
            <img src={orderIcon} alt="Hay, man." />
         </div>
         <h1 className="text-2xl">
            <b>You have not placed any orders</b>
         </h1>
         <Link
            to="/cart"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#BD5D78] mt-4"
         >
            Go to cart
         </Link>
      </div>
   );
}

export default Order;
