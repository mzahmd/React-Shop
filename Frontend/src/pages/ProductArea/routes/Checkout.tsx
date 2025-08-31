import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useShoppingCartContext } from "@/hooks/useShopCarts";
import type { IShopcart } from "@/interface/IShopCart";
import { createOrder } from "@/services/orderserivce";

const columns: ColumnDef<IShopcart>[] = [
  {
    accessorKey: "product.title",
    header: "Product",
  },
  {
    accessorKey: "product.price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
]

interface CheckoutTotalProps {
  cartItems: IShopcart[]
  clearCart: () => void
}

function CheckoutTotal({ cartItems, clearCart }: CheckoutTotalProps) {
  const checkoutTotal = {
    sum: 0,
    quantity: 0,
  }

  cartItems.forEach(item => {
    checkoutTotal.sum += item.product.price * item.quantity;
    checkoutTotal.quantity += item.quantity;
  });

  function handleCheckout(cartItems: IShopcart[]) {
    createOrder(cartItems).then(() => {
      clearCart();
      checkoutTotal.sum = 0;
      checkoutTotal.quantity = 0;
    });
  }

  if (checkoutTotal.quantity === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden w-fit mx-auto">
      <Card>
        <CardHeader className="text-center text-xl md:w-xs">
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-bold"> Quantity </span>
            {checkoutTotal.quantity}
          </p>
          <p>
            <span className="font-bold"> Total Price </span>
            ${checkoutTotal.sum}
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => handleCheckout(cartItems)}>Checkout</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function Checkout() {
  const { cartItems, clearCart } = useShoppingCartContext()

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const table = useReactTable({
    data: Object.values(cartItems),
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  })

  return (
    <div className="w-full flex flex-col-reverse justify-between md:flex-row gap-5 bg-gradient-to-b from-background via-slate-50 dark:via-slate-700 to-slate-100 dark:to-slate-800 my-10 pb-5 md:px-10">
      <div className="mx-auto mt-6 space-y-3 p-2 mb-10">
        <div className="md:w-1/3 ms-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-button-background">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="overflow-hidden md:w-4xl mx-auto">
          <Table className="bg-table-background table-background md:text-xl">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-table-hover">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-table-hover"
                  >
                    {
                      row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))
                    }
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No Order made.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <CheckoutTotal cartItems={Object.values(cartItems)} clearCart={clearCart} />
      </div >
    </div>
  )
}
