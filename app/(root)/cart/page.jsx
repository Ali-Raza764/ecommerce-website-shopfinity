import dbConnect from "@/utils/dbConnect";
import { currentUser } from "@clerk/nextjs/server";
import Cart from "@/lib/models/Cart";
import CartItem from "./CartItem";

const getCart = async (email) => {
  await dbConnect();
  const cart = await Cart.findOne({ userEmail: email }).populate(
    "products.productId"
  );
  if (cart) {
    return cart;
  }
};

const CartPage = async () => {
  const { emailAddresses } = await currentUser();
  const email = emailAddresses[0].emailAddress;
  const cart = await getCart(email);
  console.log(cart);
  return (
    <div className="w-full h-full px-3 py-6">
      <h1 className="text-4xl font-bold mb-3">Cart 🛒</h1>
      <div className="container w-full h-full flex flex-wrap gap-3 items-center justify-evenly">
        {cart?.products.map((item) => (
          <CartItem
            key={item.productId._id.toString()} // Convert ObjectId to string
            id={item.productId._id.toString()} // Convert ObjectId to string
            name={item.productId.name}
            images={item.productId.images}
            description={item.productId.description}
            price={item.productId.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
