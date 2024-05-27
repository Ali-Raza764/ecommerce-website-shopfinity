import ItemsCarousel from "@/components/reuseable/ItemsCarousel";
import ProductItem from "@/components/reuseable/ProductItem";


const AllProductsCarousel = () => {
  const dummyArray = Array.from({ length: 10 }, (v, k) => k);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel title={"Our Products"} text={"Explore Our Products"}>
          {dummyArray.map((item) => (
            <div className="embla__slide" key={item}>
              <div className="flex flex-col items-center justify-center">
                <ProductItem />
              </div>
            </div>
          ))}
        </ItemsCarousel>
      </div>
      <div className="w-full flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel>
          {dummyArray.map((item) => (
            <div className="embla__slide" key={item}>
              <div className="flex flex-col items-center justify-center">
                <ProductItem />
              </div>
            </div>
          ))}
        </ItemsCarousel>
        <button className="px-11 text-xl py-2 bg-red-500 rounded-md w-max text-white">
          View All Products
        </button>
      </div>
    </>
  );
};

export default AllProductsCarousel;
