import { TableDemo } from "../_components/Table";
import { fetchOrders } from "@/utils/fetchAllItems";

const Orders = async () => {
  const orders = await fetchOrders();
  return (
    <div className="w-full min-h-screen">
      <h1 className="text-3xl font-bold font-sans">Orders 📮</h1>
      <div className="p-11 h-[75vh] overflow-y-auto">
        <TableDemo data={orders} />
      </div>
    </div>
  );
};

export default Orders;
