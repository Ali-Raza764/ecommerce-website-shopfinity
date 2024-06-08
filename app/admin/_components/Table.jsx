"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableDemo({ data }) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((order) => (
          <TableRow key={order._id}>
            <TableCell className="font-medium">{order._id}</TableCell>
            <TableCell> {order.pricePaid ? "YES" : "NO"}</TableCell>
            <TableCell>{order.productId}</TableCell>
            <TableCell className="text-right">{order.pricePaid}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00 etc..</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
