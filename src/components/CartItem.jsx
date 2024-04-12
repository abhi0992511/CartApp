import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/Slices/cartSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
const CartItem = ({ item }) => {
  const [number, setNumber] = useState(item.price);
  const roundToTwoDecimalPlaces = (num) => {
    return setNumber(Math.round(num * 100) / 100);
  };

  const dispatch = useDispatch();
  function removeItem() {
    dispatch(removeProduct(item.id));
    toast.error("Item removed!!!");
  }

  return (
    <div className="flex justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
      <div className="h-[180px]">
        <img
          src={item.image}
          alt=" "
          loading="lazy"
          className="h-full w-full"
        ></img>
      </div>
      <div className="text-gray-700 p-2  m-5 font-semibold text-lg  mt-1">
        <h2 className="font-bold text-sm">
          {item.title.split(" ").slice(0, 10).join(" ")}
        </h2>
        <div>
          <p className="text-gray-500  m-5 font-normal text-left text-[10px] ">
            {item.description.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
        </div>
        <div className="flex justify-between m-5 items-center">
          <div className="text-gray-700 font-semibold text-lg">
            <p className="font-semibold text-lg text-green-500">
              ${number}
            </p>
          </div>
          <div onClick={removeItem}>
            <RiDeleteBin5Fill
              className="bg-red-300 rounded-full p-2"
              size={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
