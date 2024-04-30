import HomeCategoryItem from "@/components/category/HomeCategoryItem";
import CategorySideBar from "@/components/feed/CategorySideBar";
import FeaturedProduct from "@/components/feed/FeaturedProduct";
import Hero from "@/components/feed/Hero";
import ItemsCarousel from "@/components/feed/ItemsCarousel";
// import NewArrivals from "@/components/feed/NewArrivals";
import OurSpeciality from "@/components/feed/OurSpeciality";
import ProductItem from "@/components/products/ProductItem";
import SectionSeparator from "@/components/reuseable/SectionSeparator";
import React from "react";
import Search from "@/components/shared/Header/Search";

// TODO Add responsiveness to the homepage

const Home = () => {
  const dummyArray = Array.from({ length: 10 }, (v, k) => k);
  return (
    <div className="h-full w-full md:px-11 px-5">
      <CategorySideBar>
        <Hero />
      </CategorySideBar>

      <div className="search px-3 md:hidden my-3">
        <Search />
      </div>

      <div className="w-full flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel title={"Today's"} text={"Flash Sales"}>
          {dummyArray.map((item) => (
            <div className="embla__slide" key={item}>
              <ProductItem />
            </div>
          ))}
        </ItemsCarousel>
        <button className="px-11 text-xl py-2 bg-red-500 rounded-md w-max text-white">
          All Products
        </button>
      </div>

      <SectionSeparator />

      <div className="w-full hidden md:flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel title={"Categories"} text={"Browse By Category"}>
          {dummyArray.map((item) => (
            <div className="embla__slide" key={item}>
              <HomeCategoryItem />
            </div>
          ))}
        </ItemsCarousel>
      </div>

      <SectionSeparator />

      <FeaturedProduct />

      <SectionSeparator />

      <div className="w-full flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel title={"Our Products"} text={"Explore Our Products"}>
          {dummyArray.map((item) => (
            <div className="embla__slide" key={item}>
              <div className="flex flex-col items-center justify-center">
                <ProductItem />
                <ProductItem />
              </div>
            </div>
          ))}
        </ItemsCarousel>
        <button className="px-11 text-xl py-2 bg-red-500 rounded-md w-max text-white">
          View All Products
        </button>
      </div>

      <SectionSeparator />

      <OurSpeciality />

      {/* <NewArrivals /> */}
    </div>
  );
};

export default Home;
