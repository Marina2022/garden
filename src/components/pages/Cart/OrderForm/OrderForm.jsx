import s from './OrderForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {sendDiscountOrder, sendOrder} from "../../../../store/formSlice";
import {toast} from "react-toastify";

const OrderForm = () => {

  const [value, setValue] = useState('+49 ')

  const cartItems = useSelector(state => state.cart.cart);
  const totalSum = cartItems.reduce((sum, item) => {
    let price = item.discont_price ? item.discont_price : item.price
    return price * item.count + sum
  }, 0)

  const onInputChange = (e) => {
    const onlyNumbersValue = '+49 ' + e.target.value.slice(3).replace(/\D+/, '')
    const shortValue = onlyNumbersValue.slice(0, 14)
    setValue(shortValue)
  }

  const isSubmitting = useSelector (state => state.forms.isOrderSubmitting)

  const dispatch = useDispatch()

  const onSubmitClick = (e) => {
    e.preventDefault()
    if (cartItems.length === 0) {
      toast.warn('Сначала добавьте товары в корзину')
      return
    }
    e.preventDefault();
    const formData = {
      phone: value.replace(' ', ''),
      cart: cartItems
    }
    dispatch(sendOrder(formData))
  }

  return (
    <form className={s.form}>
      <h3 className={s.formTitle}>Order details</h3>
      <div className={s.totalWrapper}>
        <div className={s.total}>Total</div>
        <div className={s.sum}>{totalSum.toFixed(2)}$</div>
      </div>
      <input value={value} onChange={onInputChange} className={s.phoneNumber} type="text" placeholder="Phone number"/>
      <button onClick={onSubmitClick} className={s.orderBtn} disabled={isSubmitting}>Order</button>
    </form>
  );
};

export default OrderForm;
