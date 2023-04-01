import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/ProductSlice";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.shop.quantity);

    const showCartHandler = () => {
    dispatch(cartActions.shopCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;