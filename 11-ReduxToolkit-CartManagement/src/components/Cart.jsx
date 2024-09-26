import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="my-2">
      <button onClick={handleClearCart} className="bg-black text-white p-2 ">
        Clear Cart
      </button>
      <div>
        <CategoryItems itemCards={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
