"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart, X } from "lucide-react";

export function CartDropdown() {
  const { items, removeFromCart, getTotalItems, clearCart } = useCart();
  const totalItems = getTotalItems();

  if (totalItems === 0) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="end">
          <div className="text-center py-4 px-4">
            <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">Your cart is empty</p>
            <p className="text-sm text-gray-400">
              Start adding courses to your cart!
            </p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary" />
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96" align="end">
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Cart ({totalItems} items)</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCart}
              className="text-red-600 hover:text-red-700"
            >
              Clear All
            </Button>
          </div>

          <div className="max-h-96 overflow-y-auto space-y-3">
            {items.map(item => (
              <Card key={item.id} className="p-3">
                <CardContent className="p-0">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1">
                        {item.authors}
                      </p>
                      <p className="font-semibold text-primary">{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 p-1"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="border-t pt-4">
            <Button className="w-full bg-primary text-white">Go to Cart</Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
