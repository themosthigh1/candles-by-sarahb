"use client";

import { FC, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { useSession } from "next-auth/react";
import { removeItemFromCart, toggleCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import useCartTotals from "@/hooks/useCartTotals";
import { getStripe } from "@/libs/loadStripe";
import Link from "next/link";

const Cart: FC = () => {
  const { showCart, cartItems } = useAppSelector((state) => state.cart);
  const [renderComponent, setRenderComponent] = useState(false);

  const { totalPrice } = useCartTotals();

  const { data: session } = useSession();

  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) =>
    dispatch(removeItemFromCart({ _id: id }));

  const checkoutHandler = async () => {
    const stripe = await getStripe();

    const { data } = await axios.post("/api/stripe", cartItems);

    if (!data) return;

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <div
      className={`${classNames.container} ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className={classNames.header}>
        <h2 className={classNames.title}>Shopping Cart</h2>
        <button
          className={classNames.closeBtn}
          onClick={() => dispatch(toggleCart())}
        >
          X
        </button>
      </div>

      <div className={classNames.itemContainer}>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className={cartItemClassNames.container}>
              <Image
                width={100}
                height={100}
                src={item.images[0].url}
                alt={item.name}
                className={cartItemClassNames.image}
              />
              <div className={cartItemClassNames.details}>
                <h3 className={cartItemClassNames.name}>{item.name}</h3>
                <div className="flex">
                  <p className={cartItemClassNames.price}>
                    $ {item.price.toFixed(2)}
                  </p>
                  <div className={cartItemClassNames.quantityContainer}>
                    <span className={cartItemClassNames.quantity}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className={cartItemClassNames.removeButton}
                    >
                      <RiCloseLine />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>

      <div className={classNames.subtotalContainer}>
        <span className={classNames.subtotalText}>Subtotal</span>
        <span className={classNames.subtotalPrice}>$ {totalPrice}</span>
      </div>
      <button onClick={checkoutHandler} className={classNames.checkoutBtn}>
        Checkout
      </button>
    </div>
  );
};

const classNames = {
  container:
    "fixed top-0 right-0 z-50 h-screen w-4/5 md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
  header: "px-4 py-2 bg-gray-200 flex items-center justify-between",
  title: "text-lg font-semibold",
  closeBtn: "text-gray-600 hover:text-gray-800",
  itemContainer: "p-2 flex flex-col items-center border-b",
  subtotalContainer: "px-4 py-2 bg-gray-200 flex items-center justify-between",
  subtotalText: "text-gray-600",
  subtotalPrice: "font-semibold",
  checkoutBtn: "p-2 bg-black text-white rounded mx-4 my-2 hover:bg-gray-900",
};

const cartItemClassNames = {
  container: "flex items-center py-2 border-b",
  image: "w-20 h-20 object-cover mr-4",
  details: "flex-1",
  name: "text-sm md:text-base font-medium",
  price: "text-gray-600",
  quantityContainer: "flex items-end",
  quantity: "px-2 flex-1",
  removeButton:
    "w-6 h-6 bg-gray-200 text-gray-600 flex items-center justify-center rounded ml-2",
};

export default Cart;
