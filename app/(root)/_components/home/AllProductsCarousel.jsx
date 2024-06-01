import ItemsCarousel from "@/components/reuseable/ItemsCarousel";
import ProductItem from "@/components/reuseable/ProductItem";

const AllProductsCarousel = ({ products }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel
          title={"Checkout"}
          text={"Our Products"}
          showButtons={true}
        >
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
      </div>
      <div className="w-full flex flex-col items-center justify-center relative my-11">
        <ItemsCarousel showButtons={true}>
          {products.map((item) => (
            <div className="embla__slide" key={item}>
              <ProductItem
                key={item._id.toString()}
                id={item._id.toString()}
                name={item.name}
                images={item.images}
                description={item.description}
                excerpt={item.excerpt}
                price={item.price}
              />
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
