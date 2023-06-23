import s from './CartCard.module.scss';
import minus from '../../../../assets/minus.svg'
import plus from '../../../../assets/plus.svg'
import {BASE_URL} from "../../../../consts";
import closeBtn from '../../../../assets/closeBtn.svg'
import {useDispatch} from "react-redux";
import {changeCartItemCount, minusItem, plusItem, removeProduct} from "../../../../store/cartSlice";
import {useRef} from "react";

const CartCard = ({discont_price, price, title, image, id, count}) => {

  const inputRef = useRef(null)

  const dispatch = useDispatch()
  const onDeleteClick = (id) => {
    dispatch(removeProduct(id))
  }

  const onCountChange = (e, id) => {
    dispatch(changeCartItemCount({id, value: e.target.value.replace(/\D/, '')}))
  }

  const onMinusClick = (id) => {
     if (inputRef.current.value < 2) return
      dispatch(minusItem(id))
  }

  const onPlusClick = (id) => {
    dispatch(plusItem(id))
  }

  return (
    <div className={s.card}>
      <button onClick={() => onDeleteClick(id)}><img className={s.closeBtn} src={closeBtn} alt="close button"/></button>
      <img className={s.image} src={BASE_URL + image} alt="product"/>
      <div className={s.titleBlock}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.inputWrapper}>
          <button onClick={()=> onMinusClick(id)}><img className={s.minus} src={minus} alt="minus"/></button>
          <input ref={inputRef} onChange={(e) => onCountChange(e, id)} value={count} className={s.input} type="text"/>
          <button onClick={() => onPlusClick(id)}><img src={plus} alt="plus"/></button>
        </div>
      </div>

      <div className={s.actualPrice}> {discont_price ? discont_price : price}<span className={s.dollar}>$</span></div>

      {discont_price && <div className={s.oldPrice}>{price}$</div>}

    </div>
  );
};

export default CartCard;
