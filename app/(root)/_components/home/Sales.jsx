import ProductItem from "@/components/reuseable/ProductItem";
import ItemsCarousel from "@/components/reuseable/ItemsCarousel";

const Sales = ({ products }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative my-11">
      <ItemsCarousel title={"Today's"} text={"Flash Sales"}>
        {products.map((item) => (
          <div className="embla__slide" key={item}>
            <ProductItem
              key={item._id.toString()}
              id={item._id.toString()}
              name={item.name}
              images={item.images}
              price={item.price}
            />
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
