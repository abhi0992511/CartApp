import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-between items-center mx-auto p-2 space-x-20 space-y-10 max-w-6xl">
        <div>
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} index={index} />
          ))}
        </div>
          <div className="flex flex-col">
          <div className="text-richblack-900">
            <p className="font-bont text-2xl  text-green-500">YOUR CART</p>
            <h1 className="font-bold text-5xl text-green-500">SUMMARY</h1>
          </div>
          <div className="mt-30"></div>
            <p className="font-semibold text-lg truncate text-richblack-400">
              Total items : <span>{cart.length}</span>
            </p>
            <p className="font-semibold text-lg truncate text-richblack-400">
              Total price : $<span>{amount}</span>
            </p>
            <button className="bg-gray-800 text-white font-semibold rounded-lg p-2 hover:bg-slate-200 hover:text-black mt-5">Checkout Now</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center h-screen items-center">
          <h1 className="text-4xl font-extrabold items-center m-5">CART EMPTY</h1>
          <NavLink to="/">
            <button className="bg-gray-800 text-white rounded-lg p-2 hover:bg-slate-200 hover:text-blacktext-xl font-semibold">SHOP NOW</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
