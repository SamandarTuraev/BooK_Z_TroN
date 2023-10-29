import PropTypes from "prop-types";
import Card from "@/components/card";

import { instance } from "@/utils/use-request";
import { Link } from "react-router-dom";
import heartIcon from "../Assets/icons/heart-icon.svg";

function WishList({ wishList, setWishList, isLogged }) {
   const click = async (id) => {
      setWishList((prev) => prev.filter((wishItem) => wishItem._id !== id));
      await instance.delete("/wishlist/" + id);
   };
   return (
      <>
         {wishList.length ? (
            <div className="flex  mt-28 flex-wrap gap-10">
               {wishList.map((wishItem) => (
                  <Card
                     key={wishItem._id}
                     {...wishItem}
                     isLogged={isLogged}
                     handleLikeBtnClick={click}
                  />
               ))}
            </div>
         ) : (
            <div className="py-16 mw-[100%] flex flex-col justify-center items-center mt-24">
               <h1 className="text-2xl">
                  <b>0 items in Wishlist</b>
               </h1>
               <div className="max-w-[15%]">
                  <img src={heartIcon} alt="heart" />
               </div>
               <h1 className="text-2xl">
                  <b>Your wishlist is empty 🙃</b>
               </h1>
               <Link
                  to="/shop"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#BD5D78] mt-4"
               >
                  Go to shop
               </Link>
            </div>
         )}
      </>
   );
}
export default WishList;

WishList.propTypes = {
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
   isLogged: PropTypes.any,
};
