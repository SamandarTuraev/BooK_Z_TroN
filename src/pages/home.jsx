import PropTypes from "prop-types";
import Genres from "@/components/genres";
import NewArrivals from "@/components/new-arrivals";
import img from "../img/Screenshot.png";
function Home({ selectedGenres, setSelectedGenres, wishList, setWishList }) {
   return (
      <div className="mt-3">
         <img src={img} alt="img" className="mb-5" style={{ width: "100%" }} />
         <div>
            <h2 className="text-2xl text-center mb-4"> G e n r e s</h2>
            <Genres
               selectedGenres={selectedGenres}
               setSelectedGenres={setSelectedGenres}
            />
         </div>
         <dev>
            <h2 className="text-2xl text-center mb-4"> New Arrivals</h2>
            <NewArrivals setWishList={setWishList} wishList={wishList} />
         </dev>
      </div>
   );
}
export default Home;

Home.propTypes = {
   selectedGenres: PropTypes.array,
   setSelectedGenres: PropTypes.func,
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
};
