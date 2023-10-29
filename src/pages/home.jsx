import PropTypes from "prop-types";
import Genres from "@/components/genres";
import NewArrivals from "@/components/new-arrivals";
import img from "../Assets/images/Screenshot.png";
import Footer from "@/components/footer";
function Home({
   selectedGenres,
   setSelectedGenres,
   wishList,
   setWishList,
   isLogged,
}) {
   return (
      <div className="mt-24">
         <img src={img} alt="img" className="mb-5" style={{ width: "100%" }} />
         <div>
            <h2 className="text-4xl text-center mb-8 font-bold">Genres</h2>
            <Genres
               selectedGenres={selectedGenres}
               setSelectedGenres={setSelectedGenres}
            />
         </div>
         <dev>
            <h2 className="text-4xl text-center mb-8 font-bold">
               New Arrivals
            </h2>
            <NewArrivals
               setWishList={setWishList}
               wishList={wishList}
               isLogged={isLogged}
            />
         </dev>
         <Footer />
      </div>
   );
}
export default Home;

Home.propTypes = {
   selectedGenres: PropTypes.array,
   setSelectedGenres: PropTypes.func,
   wishList: PropTypes.array,
   setWishList: PropTypes.func,
   isLogged: PropTypes.any,
};
