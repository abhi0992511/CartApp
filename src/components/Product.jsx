import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function add() {
    dispatch(addProduct(product));
    toast.success("item added in cart");
  }
  function remove() {
    dispatch(removeProduct(product.id));
    toast.error("item removed from cart");
  }
  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
      <div>
        <h2 className="text-gray-700 p-2 font-semibold text-lg  mt-1">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h2>
      </div>
      <div>
        <p className="text-gray-500  font-normal text-left text-[10px] ">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img
          src={product.image}
          alt=" "
          loading="lazy"
          className="h-full w-full"
        ></img>
      </div>
      <div className="flex justify-between gap-5 mt-5 items-center w-full">
        <div>
          <p className="font-semibold text-lg truncate text-green-500">
            $<span className="font-bold ">{product.price}</span>
          </p>
        </div>

        {cart.some((p) => p.id === product.id) ? (
          <button
            className="bg-gray-800 text-white font-semibold rounded-lg p-2 hover:bg-slate-200 hover:text-black"
            onClick={remove}
          >
            Remove item
          </button>
        ) : (
          <button
            className="bg-gray-800 text-white font-semibold rounded-lg p-2 hover:bg-slate-200 hover:text-black "
            onClick={add}
          >
            Add item
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
