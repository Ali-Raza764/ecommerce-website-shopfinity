import ProductItem from "@/components/reuseable/ProductItem";
import ItemsCarousel from "@/components/reuseable/ItemsCarousel";

const Sales = () => {
  const dummyArray = Array.from({ length: 10 }, (v, k) => k);

  return (
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
  );
};

export default Sales;
