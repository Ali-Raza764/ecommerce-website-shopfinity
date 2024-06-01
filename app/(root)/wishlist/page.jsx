import ProductItem from "@/components/reuseable/ProductItem";
import { currentUser } from "@clerk/nextjs/server";
import dbConnect from "@/utils/dbConnect";
import WishList from "@/lib/models/WishList";

const getWishList = async (email) => {
  await dbConnect();
  const wishlist = await WishList.findOne({ userEmail: email }).populate("products.productId");
  return wishlist ? wishlist : null;
};

const WishListPage = async () => {
  const { emailAddresses } = await currentUser();
  const email = emailAddresses[0].emailAddress;
  const list = await getWishList(email);

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
