import s from './Cart.module.scss';
import {useEffect} from "react";

const Cart = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  return (
    <div>
      Cart
    </div>
  );
};

export default Cart;
