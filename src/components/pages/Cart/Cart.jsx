import s from './Cart.module.scss';
import {useEffect} from "react";
import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import {Link} from "react-router-dom";
import forwardIcon from '../../../assets/forward.svg'
import CartCard from "./CartCard/CartCard";
import {useSelector} from "react-redux";
import OrderForm from "./OrderForm/OrderForm";

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const cartItems = useSelector(state => state.cart.cart);

  return (
    <div className={s.cart}>
      <div className="container">
        <SectionTitle classname={s.title}>
          Shopping cart
        </SectionTitle>

        <div className={s.wrapper}>
          <div className={s.content}>
            <Link className={s.backLink} to={'/categories'}><span>Back to the store</span>
              <img src={forwardIcon} alt="forward icon"/>
            </Link>
            {
              cartItems.map(item => <CartCard {...item} key={item.id}/>)
            }
          </div>
          <OrderForm/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
