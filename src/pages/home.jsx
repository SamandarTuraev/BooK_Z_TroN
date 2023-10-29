import PropTypes from "prop-types";
import Genres from "@/components/genres";
import NewArrivals from "@/components/new-arrivals";
import img from "../Assets/images/Screenshot.png";
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
         <div className="footer-container">
            <ul className="footer-list">
               <li>
                  <h2>ABOUT</h2>
               </li>
               <li>
                  <p>Contact us</p>
               </li>
               <li>
                  <p>About us</p>
               </li>
               <li>
                  <p>Careers</p>
               </li>
               <li>
                  <p>Gift Cards</p>
               </li>
            </ul>
            <ul className="footer-list">
               <li>
                  <h2>HELP</h2>
               </li>
               <li>
                  <p>Payments</p>
               </li>
               <li>
                  <p>Shipping</p>
               </li>
               <li>
                  <p>Cancellation &amp; Returns</p>
               </li>
               <li>
                  <p>FAQs</p>
               </li>
            </ul>
            <ul className="footer-list">
               <li>
                  <h2>SOCIALS</h2>
               </li>
               <li>
                  <a
                     href="https://www.linkedin.com/in/naman-saxena-5460b3188/"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <p>Linkedin</p>
                  </a>
               </li>
               <li>
                  <a
                     href="https://github.com/Naman-Saxena1"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <p>Github</p>
                  </a>
               </li>
               <li>
                  <a
                     href="https://twitter.com/NamanSa83962307?s=08"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <p>Twitter</p>
                  </a>
               </li>
               <li>
                  <a
                     href="https://www.instagram.com/naman_saxena98/"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <p>Instagram</p>
                  </a>
               </li>
            </ul>
         </div>
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
