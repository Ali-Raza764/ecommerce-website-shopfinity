import Search from "@/components/reuseable/Search";
import CategorySideBar from "@/app/(root)/_components/home/CategorySideBar";
import Hero from "@/app/(root)/_components/home/Hero";
import Sales from "./_components/home/Sales";
import FeaturedProduct from "./_components/home/FeaturedProduct";
import OurSpeciality from "@/components/reuseable/OurSpeciality";
import AllProductsCarousel from "./_components/home/AllProductsCarousel";
import SectionSeparator from "@/components/reuseable/SectionSeparator";
import { Suspense } from "react";
import { fetchAllProducts } from "@/utils/fetchAllItems";


const Home = async () => {
  const products = await fetchAllProducts();

  return (
    <div className="h-full w-full md:px-11 px-5">
      <CategorySideBar>
        <Hero />
      </CategorySideBar>

      <div className="search px-3 md:hidden my-3">
        <Suspense fallback={<div>Loading</div>}>
          <Search className={"p-3"} />
        </Suspense>
      </div>

      <Sales products={products} />
      <SectionSeparator />

      <FeaturedProduct />
      <SectionSeparator />

      <AllProductsCarousel products={products} />
      <SectionSeparator />

      <OurSpeciality />
    </div>
  );
};

export default Home;
