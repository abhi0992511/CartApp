import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div >
      <nav className="flex justify-between mx-auto h-20 max-w-6xl items-center ">
        <NavLink to="/">
          <img
            src="https://thumbs.dreamstime.com/b/online-shop-logo-design-vector-icon-shopping-bag-orange-color-135331224.jpg"
            alt="Not Responding"
            height={100}
            width={100}
          ></img>
        </NavLink>

        <div className="flex mr-5 text-white items-center space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              <span className="text-xs bg-green-500 rounded-full text-center absolute -top-2 -right-1 items-center animate-bounce w-5 h-5 justify-center flex">
                {cart.length}
              </span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
