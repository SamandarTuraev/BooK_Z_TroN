import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "./utils/use-request.js";

import Home from "./pages/home.jsx";
import Header from "./components/header.jsx";
// import Layout from "./components/layout.jsx";
import SingleProduct from "./pages/single-product.jsx";
import Shop from "./pages/shop.jsx";
import WishList from "./pages/wishlist.jsx";
import Login from "./pages/login.jsx";
import Cart from "./pages/Cart.jsx";
import Protected from "./components/protected.jsx";
import Order from "./pages/order.jsx";

function App() {
   const [products, setProducts] = useState([]);
   const [selectedGenres, setSelectedGenres] = useState([]);
   const [wishList, setWishList] = useState([]);
   const [isLogged, setIsLogged] = useState(() =>
      localStorage.getItem("access_token")
   );
   const [cartProducts, setCartProducts] = useState([]);

   const getData = async () => {
      const data = await instance.get("/user");
      if (data.data?.user) {
         setWishList(data.data?.user?.wishlist);
      }
      console.log(data.status);
   };
   useEffect(() => {
      // eslint-disable-next-line no-extra-semi
      (async () => {
         const data = await instance.get("/home/products");
         setProducts(data.data?.productsList);
      })();
      getData();
   }, []);
   console.log(wishList);
   const handleLikeBtnClick = async (id) => {
      const el = wishList.find((wishItem) => wishItem._id === id);

      if (!el) {
         const product = products.find((arr) => arr._id === id);
         setWishList((prev) => [...prev, product]);
         await instance.post("/wishlist", {
            productdetails: product,
         });
      } else {
         setWishList((prev) => prev.filter((wishItem) => wishItem._id !== id));
         await instance.delete("/wishlist/" + id);
      }
   };

   return (
      <BrowserRouter>
         <div className="container">
            <Header
               isLogged={isLogged}
               setIsLogged={setIsLogged}
               cartProducts={cartProducts}
               wishList={wishList}
            />
            <Routes>
               <Route
                  path="/"
                  element={
                     <Home
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                        wishList={wishList}
                        setWishList={setWishList}
                        isLogged={isLogged}
                     />
                  }
               />
               <Route
                  path="/shop"
                  element={
                     <Protected isLogged={isLogged}>
                        <Shop
                           handleLikeBtnClick={handleLikeBtnClick}
                           products={products}
                           selectedGenres={selectedGenres}
                           setSelectedGenres={setSelectedGenres}
                           wishList={wishList}
                           setWishList={setWishList}
                           isLogged={isLogged}
                        />
                     </Protected>
                  }
               />
               <Route
                  path="/product/:productID"
                  element={
                     <Protected isLogged={isLogged}>
                        <SingleProduct
                           setCartProducts={setCartProducts}
                           cartProducts={cartProducts}
                           wishList={wishList}
                           setWishList={setWishList}
                        />
                     </Protected>
                  }
               />
               <Route
                  path="/wishlist"
                  element={
                     <Protected isLogged={isLogged}>
                        <WishList
                           wishList={wishList}
                           setWishList={setWishList}
                           isLogged={isLogged}
                        />
                     </Protected>
                  }
               />{" "}
               <Route
                  path="/cart"
                  element={
                     <Protected isLogged={isLogged}>
                        <Cart
                           setCartProducts={setCartProducts}
                           cartProducts={cartProducts}
                           wishList={wishList}
                           setWishList={setWishList}
                           products={products}
                        />
                     </Protected>
                  }
               />
               <Route
                  path="/order"
                  element={
                     <Protected isLogged={isLogged}>
                        <Order />
                     </Protected>
                  }
               />
               <Route
                  path="/login"
                  element={<Login setIsLogged={setIsLogged} />}
               />
            </Routes>
         </div>
      </BrowserRouter>
   );
}
export default App;
