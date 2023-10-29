import PropTypes from "prop-types";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { genres } from "@/constants/genre";
import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

function Shop({
   products,
   selectedGenres,
   setSelectedGenres,
   handleLikeBtnClick,
   wishList,
   isLogged,
}) {
   const [sliderValues, setSliderValues] = useState({
      min: 0,
      max: 0,
   });
   const [range, setRange] = useState([sliderValues?.min, sliderValues?.max]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [latestProducts, setLatestProducts] = useState([]);
   const [search, setSearch] = useState("");
   console.log(search);
   const handleRangeChange = (value) => {
      setRange(value);
   };

   useEffect(() => {
      if (!selectedGenres.length) {
         setSelectedGenres([...genres]);
      }
   }, []);
   useEffect(() => {
      if (products) {
         setFilteredProducts(products);
      }
   }, [products]);

   useEffect(() => {
      if (products.length) {
         setSliderValues(
            products.reduce(
               (acc, curr) =>
                  curr.originalPrice > acc.max
                     ? { ...acc, max: curr.originalPrice }
                     : acc,
               { min: 0, max: 0 }
            )
         );
      }
   }, [products]);

   useEffect(() => {
      let newProducts = products.filter(
         (product) =>
            (product.discountedPrice >= range[0] ||
               product.originalPrice >= range[0]) &&
            (product.discountedPrice <= range[1] ||
               product.originalPrice <= range[1])
      );

      newProducts = newProducts.filter(
         (pr) =>
            selectedGenres.findIndex(
               (gr) => gr.title.toUpperCase() == pr.genre.toUpperCase()
            ) !== -1
      );

      setFilteredProducts([...newProducts]);
      setLatestProducts([...newProducts]);
   }, [range, selectedGenres]);

   useEffect(() => {
      setRange([sliderValues.min, sliderValues.max]);
   }, [sliderValues]);

   const handleGenreChange = (title) => {
      const currentGrIdx = selectedGenres.findIndex((gr) => gr.title == title);
      if (currentGrIdx === -1) {
         setSelectedGenres((prev) => [...prev, { title }]);
      } else {
         selectedGenres.splice(currentGrIdx, 1);
         setSelectedGenres([...selectedGenres]);
      }
   };
   const onClear = () => {
      setSelectedGenres([...genres]);
      setRange([0, sliderValues.max]);
   };

   const onChangeRating = (rating) => {
      if (rating == "all") {
         setFilteredProducts([...latestProducts]);
      } else {
         const newData = latestProducts?.filter(
            (data) => Number(data.rating) == rating
         );
         setFilteredProducts([...newData]);
      }
   };
   const onSearchBtn = () => {
      if (search) {
         const newData = latestProducts.filter((product) =>
            product.bookName.toUpperCase().includes(search.toUpperCase())
         );
         setFilteredProducts([...newData]);
      } else {
         setFilteredProducts([...latestProducts]);
      }
      setSearch("");
   };

   const onChangeSortBy = (sort) => {
      if (sort == "mix") {
         setFilteredProducts(latestProducts);
      } else if (sort == 1) {
         setFilteredProducts([
            ...filteredProducts.sort(
               (a, b) => a.discountedPrice - b.discountedPrice
            ),
         ]);
      } else {
         setFilteredProducts([
            ...filteredProducts.sort(
               (a, b) => b.discountedPrice - a.discountedPrice
            ),
         ]);
      }
   };
   console.log(filteredProducts);

   return (
      <>
         <div className=" flex gap-12 h-[86vh] mt-24 ps-8">
            <div className="w-1/4 overflow-y-auto pr-8 ">
               <div className="flex justify-between items-center mb-5 mt-8">
                  <h2 className="text-2xl">Filters</h2>
                  <Button onClick={onClear}>Clear Filter</Button>
               </div>
               <div className=" mt-8">
                  <h2 className="text-center text-2xl  mb-4">Search</h2>
                  <div className="mb-4">
                     <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                           type="text"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button type="button" onClick={onSearchBtn}>
                           Search
                        </Button>
                     </div>
                  </div>

                  <h2 className="text-center text-2xl  mb-8"> Price</h2>
                  <div className="flex justify-center gap-3 mb-8">
                     <span>Min</span>
                     <input
                        type="number"
                        defaultValue={0}
                        value={range[0]}
                        min="0"
                        max="100"
                        style={{
                           width: "80px",
                           textAlign: "center",
                           border: "1px solid black",
                        }}
                        onChange={(e) => setRange([e.target.value, range[1]])}
                     />
                     <span>- Max</span>
                     <input
                        type="text"
                        defaultValue={1000}
                        value={range[1]}
                        min="0"
                        style={{
                           width: "80px",
                           textAlign: "center",
                           border: "1px solid black",
                        }}
                        onChange={(e) => setRange([range[0], e.target.value])}
                     />
                  </div>

                  <Slider
                     defaultValue={[sliderValues.min, sliderValues.max]}
                     max={sliderValues?.max}
                     min={0}
                     step={1}
                     value={range}
                     onValueChange={handleRangeChange}
                     formatLabel={(value) => `${value} `}
                  />
               </div>

               <div className="mt-16 w-[100%] m-[auto]">
                  <h2 className=" text-2xl  mb-4"> Category</h2>
                  {genres.map((genre) => (
                     <div
                        className="flex items-center space-x-2 mt-2"
                        key={genre.title}
                     >
                        <Checkbox
                           id={genre.title}
                           checked={
                              selectedGenres.findIndex(
                                 (gr) => gr.title == genre.title
                              ) !== -1
                           }
                           onCheckedChange={() =>
                              handleGenreChange(genre.title)
                           }
                        />
                        <Label
                           htmlFor={genre.title}
                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                           {genre.title}
                        </Label>
                     </div>
                  ))}
               </div>

               <div className="mt-8 w-auto ">
                  <h2 className=" text-2xl  mb-4"> Rating</h2>
                  <RadioGroup
                     onChange={(e) => console.log(e.target)}
                     defaultValue="all"
                  >
                     <div
                        className="flex items-center space-x-2 mb-2 "
                        onClick={() => onChangeRating("all")}
                     >
                        <RadioGroupItem value="all" id="all" />
                        <Label htmlFor="all"> All stars or above</Label>
                     </div>
                     <div
                        className="flex items-center space-x-2 mb-2 "
                        onClick={() => onChangeRating(4)}
                     >
                        <RadioGroupItem value="4" id="one" />
                        <Label htmlFor="one">4 stars or above</Label>
                     </div>

                     <div
                        className="flex items-center space-x-2 mb-2"
                        onClick={() => onChangeRating(3)}
                     >
                        <RadioGroupItem value="3" id="two" />
                        <Label htmlFor="two">3 stars or above</Label>
                     </div>

                     <div
                        className="flex items-center space-x-2 mb-2"
                        onClick={() => onChangeRating(2)}
                     >
                        <RadioGroupItem value="2" id="three" />
                        <Label htmlFor="three">2 stars or above</Label>
                     </div>

                     <div
                        className="flex items-center space-x-2 mb-2"
                        onClick={() => onChangeRating(1)}
                     >
                        <RadioGroupItem value="1" id="four" />
                        <Label htmlFor="four">1 stars or above</Label>
                     </div>
                  </RadioGroup>
               </div>
               <div className="mt-8 w-auto ">
                  <h2 className=" text-2xl  mb-4"> Sort By</h2>
                  <RadioGroup
                     onChange={(e) => console.log(e.target)}
                     defaultValue="mix"
                  >
                     <div
                        className="flex items-center space-x-2 mb-2 "
                        onClick={() => onChangeSortBy("mix")}
                     >
                        <RadioGroupItem value="mix" id="mix" />
                        <Label htmlFor="mix"> Price mixed up</Label>
                     </div>
                     <div
                        className="flex items-center space-x-2 mb-2 "
                        onClick={() => onChangeSortBy(1)}
                     >
                        <RadioGroupItem value="1" id="low" />
                        <Label htmlFor="low">Price - Low to High</Label>
                     </div>

                     <div
                        className="flex items-center space-x-2 mb-2"
                        onClick={() => onChangeSortBy(2)}
                     >
                        <RadioGroupItem value="2" id="high" />
                        <Label htmlFor="high">Price - High to Low</Label>
                     </div>
                  </RadioGroup>
               </div>
            </div>

            <div className="w-3/4 pr-8">
               <h1 className="text-center text-4xl mt-4 mb-8 text-bold">
                  Showing {filteredProducts.length} products
               </h1>
               <div className="flex justify-around  gap-5 flex-wrap">
                  {filteredProducts.length ? (
                     filteredProducts.map((product) => (
                        <Card
                           key={product._id}
                           {...product}
                           isLogged={isLogged}
                           handleLikeBtnClick={handleLikeBtnClick}
                           isLiked={
                              wishList.findIndex(
                                 (wishItem) => wishItem._id === product._id
                              ) === -1
                           }
                        />
                     ))
                  ) : (
                     <h1>Not found ...</h1>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
export default Shop;

Shop.propTypes = {
   sliderValues: PropTypes.object,
   setSliderValues: PropTypes.func,
   products: PropTypes.array,
   selectedGenres: PropTypes.array,
   setSelectedGenres: PropTypes.func,
   handleLikeBtnClick: PropTypes.func,
   wishList: PropTypes.array,
   isLogged: PropTypes.any,
};
