import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);

  async function getProduct() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProduct(data);
      console.log("data");
      console.log(data);
    } catch (error) {
      console.log("API is not working");
      setProduct([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-2 space-x-5 space-y-10 max-w-6xl">
          {products.map((product,index) => (
            <Product
              className="flex flex-row w-[450px] h-[450px]"
              key={index}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">API not responding</div>
      )}
    </div>
  );
};

export default Home;
