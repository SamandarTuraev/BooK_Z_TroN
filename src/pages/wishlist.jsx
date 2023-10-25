import PropTypes from "prop-types";
import Card from "@/components/card";

import { instance } from "@/utils/use-request";

function WishList({ wishList, setWishList }) {
   const click = async (id) => {
      setWishList((prev) => prev.filter((wishItem) => wishItem._id !== id));
      await instance.delete("/wishlist/" + id);
   };
   return (
      <>
         <h1 className="text-center text-4xl mt-4 ">
            {wishList.length} items in Wishlist
         </h1>
         <div className="flex  mt-5 flex-wrap gap-10">
            {wishList?.length ? (
               wishList.map((wishItem) => (
                  <Card
                     key={wishItem._id}
                     {...wishItem}
                     handleLikeBtnClick={click}
                  />
               ))
            ) : (
               <h1 className="text-4xl">No Wishlist</h1>
            )}
         </div>
      </>
   );
}
export default WishList;

WishList.propTypes = {
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
};
