"use client";
import Image from "next/image";
import React, { MouseEventHandler, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export type Product = {
  product_sku: number;
  part_desc: string;
  part_number: string;
  pricing: any;
  image_url: string;
  quantity: number;
};

type Operation = 'increase' | 'decrease';

export interface CartProps {
  [productId: string]: Product;
}

const CartPage = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const getProducts = () => Object.values(cart || {}); //Method for getting all products as an array data structure

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      delete updatedCart[productId]
      return updatedCart
    })
  }

  const handleRemoveProductClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const productId = Number(event.currentTarget.dataset.productid);
    if (!isNaN(productId)) {
      handleRemoveProduct(productId);
    }
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === 'increase') {
          updatedCart[productId].quantity += 1;
        } else if (operation === 'decrease' && updatedCart[productId].quantity > 1) {
          updatedCart[productId].quantity -= 1;
        }
      }
      return updatedCart;
    });
  };

  // if (cart) {
  //   <>You have no item in cart</>
  // }

  return (
    <div className="m-20">
      <section className="px-24 pt-8 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">My Shopping Cart</h1>
          <h1 className="font-semibold text-blue-700">Continue Shopping</h1>
          <button className="btn btn-accent btn-sm text-white font-bold">
            Proceed to Checkout
          </button>
        </div>
      </section>

      {/* Cart data goes in the table */}
      <section className="h-full grid-cols-1 gap-3 px-24 pb-10 md:grid mt-12 w-full">
        <table className="table-fixed">
          <thead className="h-16 bg-green-700 text-white">
            <tr>
              <th className="text-left pl-8">Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {getProducts().map((product) => (
              <tr className="h-4 border bg-white" key={product.product_sku}>
                <td className="align-middle py-8">
                  {/* Render product details from the prop */}
                  <div className="flex flex-col gap-4 pl-8">
                    <div className="ml-3 flex flex-col justify-center">
                      <p className="text-md font-semibold text-blue-700">
                        {product.part_desc}
                      </p>
                      <p className="text-xs text-gray-400 font-semibold">
                        2004-2008 Ford F150
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        className="w-[100px]"
                        src="/images/pad.png"
                        width={60}
                        height={80}
                        alt="image"
                      />
                      <div className="text-md">
                        <h5>923-662</h5>
                        <h5>Detailed Note</h5>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="mx-auto text-sm text-center">
                  ${product.pricing.sellprice}
                </td>
                {/* Additional code for quantity and total remains unchanged */}
                <td className="align-middle text-sm justify-center">
                  <div className="flex items-center justify-center">
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                      onClick={() => handleUpdateQuantity(product.product_sku, 'decrease')}
                    >
                      −
                    </button>
                    <div className="flex h-8 w-8 cursor-text items-center justify-center border active:ring-gray-500">
                      {product.quantity}
                    </div>
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                      onClick={() => handleUpdateQuantity(product.product_sku, 'increase')}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      className="btn btn-sm btn-outline"
                      data-productid={product.product_sku}
                      onClick={handleRemoveProductClick}
                    >
                      Remove
                    </button>
                  </div>
                </td>
                <td className="mx-auto text-sm text-center">
                  ${product.pricing.sellprice}
                </td>
                <td className="align-middle">
                  {/* <FaTrashAlt
                      onClick={() => removeItem(index)}
                      className="m-0 h-5 w-5 cursor-pointer"
                    /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CartPage;
