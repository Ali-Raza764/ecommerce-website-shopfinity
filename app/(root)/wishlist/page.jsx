import ProductItem from "@/components/reuseable/ProductItem";
import dbConnect from "@/utils/dbConnect";
import WishList from "@/lib/models/WishList";
import { auth } from "@/auth";

const getWishList = async (userId) => {
  await dbConnect();
  const wishlist = await WishList.findOne({ userId }).populate(
    "products.productId"
  );
  return wishlist ? wishlist : null;
};

const WishListPage = async () => {
  const session = await auth();

  const list = await getWishList(session.user.id);

  return (
    <div className="w-full h-full px-3 py-6">
      <h1 className="text-3xl font-sans">WishList ❤️</h1>
      <div className="container flex flex-wrap">
        {list?.products?.map((item) => {
          const product = item.productId;
          return (
            <ProductItem
              key={product._id.toString()}
              name={product.name}
              images={product.images}
              id={product._id.toString()}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishListPage;
