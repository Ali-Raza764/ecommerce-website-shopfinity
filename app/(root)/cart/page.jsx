import dbConnect from "@/utils/dbConnect";
import Cart from "@/lib/models/Cart";
import CartItem from "./CartItem";
import { auth } from "@/auth";

const getCart = async (userId) => {
  await dbConnect();
  const cart = await Cart.findOne({ userId }).populate("products.productId");
  if (cart) {
    return cart;
  }
};

const CartPage = async () => {
  const session = await auth();
  const cart = await getCart(session.user.id);
  
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
